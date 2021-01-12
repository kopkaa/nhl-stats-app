<template>
  <div
    v-if="!$apollo.loading"
    class="table table--main--wrapper"
  >
    <v-data-table
      :headers="headers"
      :items="division.atlantic.teams"
      :items-per-page="division.atlantic.teams.length"
      height="auto"
      class="table--main"
      dense
      calculate-widths
      hide-default-footer
    >
      <template v-slot:header.name="{ header }">
        <span>Centrální divize</span>
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
        { text: 'games', align: 'start', value: 'stats.gamesPlayed' },
        { text: 'wins', align: 'start', value: 'stats.wins' },
        { text: 'losses', align: 'start', value: 'stats.losses' },
        { text: 'points', align: 'start', value: 'stats.pts' },

      ],
      getTeams: '',
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

  created () {
    this.divisionTeams();
    // console.log('NORTH teams', this.division.north.teams);
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

      this.division.north.east = _.filter(this.getTeams, (team) => {
        if (team.division.id === 25) return team;
      });
    },
  },

};
</script>
