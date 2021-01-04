<template>
  <div
    v-if="!$apollo.loading"
    class="table table--main"
  >
    <v-data-table
      :headers="headers"
      :items="getTeams"
      :items-per-page="getTeams.length"
      height="calc(90vh - 120px)"
      class="elevation-1"
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
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'points', value: 'stats.pts' },

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
