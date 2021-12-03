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
        <span class="w-100 d-inline-block text-center mt-2">
          <span class="color-emerald"> W:</span> {{ team.stats.wins }}
          <span class="color-alizarin ml-2">L:</span> {{ team.stats.losses }}
          <span class="grey--text ml-2">OT:</span> {{ team.stats.ot }}
        </span>
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
            <!-- <match-card v-if="n === 2" /> -->
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
// TODO team stats
// TODO roster
// TODO WIn/L streak
import { GET_TEAM } from '../models/Team';
import { GET_MATCHES_BY_TEAM } from '../models/Match';
import TopTen from '../components/TopTen.vue';
// import MatchCard from '../components/MatchCard.vue';

export default {
  name: 'Team',
  components: {
    'top-ten': TopTen,
    // MatchCard,
  },
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

    getMatches: {
      query: GET_MATCHES_BY_TEAM,
      loadingKey: 'loading',
      variables () {
        return {
          teamId: this.team.id,
          startDate: Date.now().toString(),
          endDate: (Date.now() - 30).toString(),
        };
      },
      skip () {
        return true;
      },
    },
  },

  async created () {
    console.log('Date now', Date.now().toString());
    await this.fetchData();
  },

  methods: {
    fetchData () {
      // TODO fetch promises in paralell
      this.$apollo.queries.getMatches.skip = false;
      this.$apollo.queries.getMatches.refetch().then((result) => {
        console.log('RESULT', result);
        this.loading = false;
      });
    },
    //   this.$apollo.queries.getTeam.skip = false;
    //   this.$apollo.queries.getTeam.refetch().then((result) => {
    //     this.team = result.data.getTeam;
    //     this.loading = false;
    //   });
    // },
  },
};
</script>
