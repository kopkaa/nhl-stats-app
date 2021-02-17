<template>
  <v-container class="pa-10">
    {{ team.name }}
  </v-container>
</template>

<script>
import { GET_TEAM } from '../model/Team';

export default {
  name: 'TeamDetail',
  data () {
    return {
      team: null,
    };
  },

  apollo: {

    getTeam: {
      query: GET_TEAM,
      loadingKey: 'loading',
      variables () {
        return {
          season: this.$currentSeason,
          id: this.$route.params.id,
        };
      },
    },
  },

  async created () {
    console.log('PARAMS ID', this.$route.params.id);
    await this.fetchData();
  },

  methods: {
    fetchData () {
      this.$apollo.queries.getTeam.skip = false;
      this.$apollo.queries.getTeam.refetch().then((result) => {
        this.team = result.data.getTeam;
      });
    },
  },

};
</script>
