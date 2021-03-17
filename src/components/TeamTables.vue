<template>
  <main>
    <v-container class="pa-10">
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
            <template v-slot:selection="{item, index}">
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
        <template
          v-slot:item.name="{item}"
        >
          <div class="table__first-column">
            <img
              :src="item.logoUrl"
              width="35"
            >
            <a @click="openDetail(item.id)"> {{ item.name }}</a>
          </div>
        </template>

        <template
          v-slot:[`item.score`]="{item}"
        >
          <span> {{ item.standing.goalsScored }}:{{ item.standing.goalsAgainst }}</span>
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

const _ = require('lodash');

export default {
  name: 'Tables',
  data () {
    return {
      divisions: [
        {
          id: 28,
          title: 'north',
          name: 'Severní',
          teams: [],
        },
        {
          id: 26,
          title: 'atlantic',
          name: 'Atlantická',
          teams: [],
        },
        {
          id: 27,
          title: 'west',
          name: 'Západní',
          teams: [],
        },
        {
          id: 25,
          title: 'east',
          name: 'Východní',
          teams: [],
        },
        {
          title: 'all',
          name: 'Všechny',
          teams: [],
        },
      ],
      headers: [
        {
          text: 'Name', align: 'start', value: 'name', hideable: false,
        },
        {
          text: 'GP', align: 'start', value: 'stats.gamesPlayed', tooltip: 'Games played', hideable: false,
        },
        {
          text: 'W', align: 'start', value: 'stats.wins', tooltip: 'Wins', hideable: false,
        },
        {
          text: 'L', align: 'start', value: 'stats.losses', tooltip: 'Losses', hideable: false,
        },
        {
          text: 'PTS', align: 'start', value: 'stats.pts', tooltip: 'Points', hideable: false,
        },
        {
          text: 'SC', align: 'start', value: 'score', tooltip: 'Score', sortable: false, hideable: false,
        },
        {
          text: 'GS/G', align: 'start', value: 'stats.goalsPerGame', tooltip: 'Goals scored per game', hideable: true,
        },
        {
          text: 'GA/G', align: 'start', value: 'stats.goalsAgainstPerGame', tooltip: 'Goals against per game', hideable: true,
        },
        {
          text: 'SF/G', align: 'start', value: 'stats.shotsPerGame', tooltip: 'Shots per game', hideable: true,
        },
      ],
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
    this.selectedColumns = this.hideableColumns;
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
