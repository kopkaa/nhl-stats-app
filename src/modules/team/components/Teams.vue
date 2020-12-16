<template>
  <v-container class="pa-10">
    <v-row no-gutters>
      <v-col
        v-for="(team, index) of getTeams"
        :key="index"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-3 ma-3"
        >
          <v-img
            :src="team.logoUrl"
            class="white--text"
            height="100px"
            contain
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { GET_TEAMS } from '../model/Team';

export default {
  name: 'Teams',
  data () {
    return {
      conf: {},
    };
  },

  apollo: {

    getTeams: {
      query: GET_TEAMS,
      loadingKey: 'loading',
      variables: {
        season: 20192020,
      },
    },

  },
};

</script>
