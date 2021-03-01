<template>
  <v-container
    v-if="!loading"
    class="pa-10"
  >
    <v-img
      :src="team.logoUrl"
      height="100px"
      contain
    />
    <h1 class="text-center mt-4">
      {{ team.name }}
    </h1>
    <h3 class="text-center font-weight-light grey--text">
      {{ team.division.name }}
    </h3>
  </v-container>
</template>

<script>
import { GET_TEAM } from '../models/Team';

export default {
  name: 'Team',
  data () {
    return {
      team: null,
      loading: true,
    };
  },

  apollo: {
    getTeam: {
      query: GET_TEAM,
      loadingKey: 'loading',
      variables () {
        return {
          season: this.$currentSeason,
          id: parseInt(this.$route.params.id, 10),
        };
      },
      skip () {
        return true;
      },
    },
  },

  async mounted () {
    await this.fetchData();
  },

  methods: {
    fetchData () {
      this.$apollo.queries.getTeam.skip = false;
      this.$apollo.queries.getTeam.refetch().then((result) => {
        this.team = result.data.getTeam;
        this.loading = false;
      });
    },
  },
};
</script>
