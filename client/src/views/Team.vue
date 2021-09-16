<template>
  <v-container v-if="!loading" class="pa-10">
    <v-img :src="team.logoUrl" height="84px" contain />
    <h2 class="text-center mt-4">
      {{ team.name }}
    </h2>
    <h3 class="text-center font-weight-light grey--text">
      {{ team.division.name }}
    </h3>
    <v-row no-gutters>
      <!-- //TODO topten -->
      <top-ten :players="team.players" />
    </v-row>
  </v-container>
</template>

<script>
import { GET_TEAM } from "../models/Team";
import TopTen from "../components/TopTen.vue";

export default {
  name: "Team",
  components: {
    "top-ten": TopTen,
  },
  data() {
    return {
      team: null,
      loading: true,
    };
  },

  apollo: {
    getTeam: {
      query: GET_TEAM,
      loadingKey: "loading",
      variables() {
        return {
          season: this.$currentSeason,
          id: parseInt(this.$route.params.id, 10),
        };
      },
      skip() {
        return true;
      },
    },
  },

  async created() {
    await this.fetchData();
  },

  methods: {
    fetchData() {
      this.$apollo.queries.getTeam.skip = false;
      this.$apollo.queries.getTeam.refetch().then((result) => {
        this.team = result.data.getTeam;
        this.loading = false;
      });
    },
  },
};
</script>
