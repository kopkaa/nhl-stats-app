<template>
  <v-container class="pa-10 h-100">
    <div
      v-if="loading"
      class="d-flex justify-center align-center h-100"
    >
      <v-progress-circular
        :size="50"
        indeterminate
        color="#3498db"
      />
    </div>

    <div v-if="!loading">
      <div class="mb-14">
        <v-img
          :src="team.logoUrl"
          height="84px"
          contain
        />
        <h2 class="text-center mt-4">
          {{ team.name }}
        </h2>
        <h3 class="text-center font-weight-light grey--text">
          {{ team.division.name }}
        </h3>
      </div>
      <v-row no-gutters>
        <v-col
          v-for="n in 2"
          :key="n"
          :cols="6"
        >
          <v-card
            class="pa-2"
            tile
          >
            <top-ten
              v-if="n === 1"
              :players="team.players"
            />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { GET_TEAM } from '../models/Team';
import TopTen from '../components/TopTen.vue';

export default {
  name: 'Team',
  components: {
    'top-ten': TopTen,
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
      loadingKey: 'loading',
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
