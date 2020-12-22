<template>
  <div class="apollo-example">
    <v-data-table
      :headers="headers"
      :items="getTeams"
      :items-per-page="getTeams.length"
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
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'pts', value: 'points' },

      ],
      getTeams: '',
    };
  },

  apollo: {
    getTeams: {
      query: GET_ALL_TEAMS,
      loadingKey: 'loading',
      variables: {
        season: 20192020,
      },
    },
  },

  created () {
    console.log('DATAA', this.getTeams);
  },
};
</script>
