<template>
  <main v-if="!$apollo.loading">
    <div
      class="table table--main--wrapper"
    >
      <v-data-table
        :headers="headers"
        :items="selectedDivision.teams"
        :sort-by.sync="sortBy"
        :sort-desc.sync="descSort"
        :items-per-page="8"
        height="auto"
        class="table--main"
        dense
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
            <span> {{ item.name }}</span>
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
              <span v-if="h.value == 'name'">Severní divize</span>
              <span
                v-else
                v-on="on"
              >{{ h.text }}</span>
            </template>
            <span>{{ h.tooltip }}</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </div>

    <div class="wrapper--center">
      <v-icon aria-hidden="false">
        mdi-arrow-left
      </v-icon>
      <v-icon aria-hidden="false">
        mdi-arrow-right
      </v-icon>
    </div>
    <!-- <div
      class="table table--main--wrapper"
    >
      <v-data-table
        :headers="headers"
        :items="division.north.teams"
        :items-per-page="division.north.teams.length"
        height="auto"
        class="table--main"
        dense
        calculate-widths
        hide-default-footer
      >
        <template v-slot:header.name="{ header }">
          <span>Severní divize</span>
        </template>
        <template
          v-slot:item.name="{item}"
        >
          <div class="table__first-column">
            <img
              :src="item.logoUrl"
              width="35"
            >
            <span> {{ item.name }}</span>
          </div>
        </template>
      </v-data-table>
    </div>

    <div
      class="table table--main--wrapper"
    >
      <v-data-table
        :headers="headers"
        :items="division.west.teams"
        :items-per-page="division.west.teams.length"
        height="auto"
        class="table--main"
        dense
        calculate-widths
        hide-default-footer
      >
        <template v-slot:header.name="{ header }">
          <span>Západní divize</span>
        </template>
        <template
          v-slot:item.name="{item}"
        >
          <div class="table__first-column">
            <img
              :src="item.logoUrl"
              width="35"
            >
            <span> {{ item.name }}</span>
          </div>
        </template>
      </v-data-table>
    </div>
    <div
      class="table table--main--wrapper"
    >
      <v-data-table
        :headers="headers"
        :items="division.east.teams"
        :items-per-page="division.east.teams.length"
        height="auto"
        class="table--main"
        dense
        calculate-widths
        hide-default-footer
      >
        <template v-slot:header.name="{ header }">
          <span>Východní divize</span>
        </template>
        <template
          v-slot:item.name="{item}"
        >
          <div class="table__first-column">
            <img
              :src="item.logoUrl"
              width="35"
            >
            <span> {{ item.name }}</span>
          </div>
        </template>
      </v-data-table>
    </div> -->
  </main>
</template>

<script>
import { GET_ALL_TEAMS } from '../model/Team';

const _ = require('lodash');

export default {
  name: 'Tables',
  data () {
    return {
      season: this.$currentSeason,
      division: {
        north: {
          id: 28,
          name: 'Severní Divize',
          teams: [],
        },
        atlantic: {
          id: 26,
          teams: [],
        },
        west: {
          id: 27,
          teams: [],
        },
        east: {
          id: 25,
          teams: [],
        },
      },
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
      getTeams: '',
      descSort: true,
      sortBy: 'stats.pts',
    };
  },

  apollo: {
    getTeams: {
      query: GET_ALL_TEAMS,
      loadingKey: 'loading',
      variables () {
        return {
          season: this.season,
        };
      },
    },
  },

  computed: {
    selectedDivision () {
      return this.division.north;
    },
  },

  created () {
    this.divisionTeams();
  },

  methods: {
    divisionTeams () {
      this.division.north.teams = _.filter(this.getTeams, (team) => {
        if (team.division.id === 28) return team;
      });

      this.division.atlantic.teams = _.filter(this.getTeams, (team) => {
        if (team.division.id === 26) return team;
      });

      this.division.west.teams = _.filter(this.getTeams, (team) => {
        if (team.division.id === 27) return team;
      });

      this.division.east.teams = _.filter(this.getTeams, (team) => {
        if (team.division.id === 25) return team;
      });
    },
  },

};
</script>
