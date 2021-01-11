<template>
  <div
    v-if="!$apollo.loading"
    class="table table--main--wrapper"
  >
    <v-data-table
      :headers="headers"
      :items="getTeams"
      :items-per-page="getTeams.length"
      height="calc(100vh - 150px)"
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
    </v-data-table>
  </div>
</template>

<script>
import { GET_ALL_TEAMS } from '../model/Team';

export default {
  name: 'Tables',
  data () {
    return {
      season: this.$currentSeason,
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

  },
};
</script>
