<template>
  <main>
    <v-container>
      <div class="table__options">
        <div class="table__options--item">
          <label class="label">Divize</label>
          <v-select
            v-model="selectedDivision"
            :items="divisions"
            item-text="name"
            item-value="title"
            label="Divize"
            background-color="secondary"
            rounded
            dense
            return-object
            single-line
          />
        </div>
        <div class="table__options--item columns table__options--item--columns ml-auto">
          <label class="label">Sloupce</label>
          <v-select
            v-model="selectedColumns"
            :items="hideableColumns"
            item-text="tooltip"
            item-value="title"
            label="Sloupce"
            multiple
            background-color="secondary"
            rounded
            dense
            return-object
            single-line
          >
            <template v-slot:selection="{ item, index }">
              <v-chip
                v-if="index < 3"
                color="primary"
                text-color="white"
                x-small
              >
                <span>{{ item.text }}</span>
              </v-chip>
              <span
                v-if="index === 3"
                class="grey--text caption"
              >
                (+{{ selectedColumns.length - 3 }} others)
              </span>
            </template>
          </v-select>
        </div>
      </div>

      <v-data-table
        :headers="columns"
        :items="tableTeams"
        :sort-by.sync="sortBy"
        :sort-desc.sync="descSort"
        :items-per-page="31"
        height="auto"
        no-data-text="No data to display"
        dense
        :loading="$apollo.queries.getTeams.loading"
        calculate-widths
        hide-default-footer
      >
        <template v-slot:item.name="{ item }">
          <div class="table__first-column">
            <img
              :src="item.logoUrl"
              width="35"
            >
            <a @click="openDetail(item.id)"> {{ item.name }}</a>
          </div>
        </template>

        <template v-slot:[`item.score`]="{ item }">
          <span> {{ item.standing.goalsScored }}:{{ item.standing.goalsAgainst }}</span>
        </template>

        <template v-slot:[`item.standing.goalDiff`]="{ item }">
          <span :class="item.standing.goalDiff >= 0 ? 'color-emerald' : 'color-alizarin'">
            {{ item.standing.goalDiff }}
          </span>
        </template>

        <template
          v-for="h in headers"
          v-slot:[`header.${h.value}`]="{ header }"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <span v-if="h.value == 'name'">{{ selectedDivision.name }}</span>
              <span
                v-else
                v-on="on"
              >{{ h.text }}</span>
            </template>
            <span>{{ h.tooltip }}</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-container>
  </main>
</template>

<script>
import { GET_ALL_TEAMS_STATS } from '../models/Team';
import headers from './headers/teamTable';

export default {
  name: 'Tables',
  data () {
    return {
      divisions: [
        {
          id: 16,
          title: 'central',
          name: 'Centrální',
          teams: [],
        },
        {
          id: 15,
          title: 'pacific',
          name: 'Pacifická',
          teams: [],
        },
        {
          id: 18,
          title: 'metropolitan',
          name: 'Metropolitní',
          teams: [],
        },
        {
          id: 17,
          title: 'atlantic',
          name: 'Atlantická',
          teams: [],
        },
        {
          title: 'all',
          name: 'Všechny',
          teams: [],
        },
      ],
      headers,
      descSort: true,
      sortBy: 'stats.pts',
      teams: [],
      selectedDivision: '',
      selectedColumns: [],
    };
  },

  apollo: {
    getTeams: {
      query: GET_ALL_TEAMS_STATS,
      loadingKey: 'loading',
      variables () {
        return {
          season: this.$currentSeason,
        };
      },

      skip () {
        return true;
      },
    },
  },

  computed: {
    tableTeams () {
      if (this.selectedDivision.id) {
        const selectedTeams = _.filter(this.teams, (team) => {
          if (team.division.id === this.selectedDivision.id) return team;
        });
        return selectedTeams;
      }
      return this.teams;
    },
    hideableColumns () {
      return this.headers.filter((header) => header.hideable === true);
    },
    columns () {
      const defaultColumns = this.headers.filter((header) => header.hideable === false);
      return defaultColumns.concat(this.selectedColumns);
    },
  },

  async created () {
    await this.fetchData();
    [this.selectedDivision] = this.divisions;
    this.selectedColumns = this.headers.filter((header) => header.default === true);
  },

  methods: {
    fetchData () {
      this.$apollo.queries.getTeams.skip = false;
      this.$apollo.queries.getTeams.refetch().then((results) => {
        this.teams = results.data.getTeams;
        this.teams.forEach((element) => {
          Object.keys(element.stats).forEach((v) => {
            element.stats[v] = _.floor(element.stats[v], 2);
          });
        });
      });
    },

    openDetail (id) {
      this.$router.push({ name: 'team-detail', params: { id } });
    },
  },
};
</script>
