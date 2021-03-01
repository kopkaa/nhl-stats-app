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
      </div>
      <v-data-table
        :headers="headers"
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
        { text: 'Name', align: 'start', value: 'name' },
        {
          text: 'GP', align: 'start', value: 'stats.gamesPlayed', tooltip: 'Games played',
        },
        {
          text: 'W', align: 'start', value: 'stats.wins', tooltip: 'Wins',
        },
        {
          text: 'L', align: 'start', value: 'stats.losses', tooltip: 'Losses',
        },
        {
          text: 'PTS', align: 'start', value: 'stats.pts', tooltip: 'Points',
        },
        {
          text: 'SC', align: 'start', value: 'score', tooltip: 'Score', sortable: false,
        },
        {
          text: 'GS', align: 'start', value: 'stats.goalsPerGame', tooltip: 'Goals scored per game',
        },
        {
          text: 'GA', align: 'start', value: 'stats.goalsAgainstPerGame', tooltip: 'Goals against per game',
        },
      ],
      descSort: true,
      sortBy: 'stats.pts',
      teams: [],
      selectedDivision: '',
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
  },

  async created () {
    await this.fetchData();
    [this.selectedDivision] = this.divisions;
  },

  methods: {
    fetchData () {
      this.$apollo.queries.getTeams.skip = false;
      this.$apollo.queries.getTeams.refetch().then((results) => {
        this.teams = results.data.getTeams;
      });
    },

    openDetail (id) {
      this.$router.push({ name: 'team-detail', params: { id } });
    },
  },

};
</script>
