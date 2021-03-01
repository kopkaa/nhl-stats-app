<template>
  <v-container class="pa-10">
    <v-row no-gutters>
      <v-col
        v-for="(team, index) of getTeams"
        :key="index"
        cols="12"
        sm="4"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-card
              class="pa-3 ma-3"
              v-on="on"
            >
              <v-img
                :src="team.logoUrl"
                class="card__team"
                height="100px"
                contain
                @click="openDetail(team.id)"
              />
            </v-card>
          </template>
          <span>{{ team.name }}</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { GET_TEAMS } from '../models/Team';

export default {
  name: 'Teams',
  data () {
    return {
    };
  },

  apollo: {

    getTeams: {
      query: GET_TEAMS,
      loadingKey: 'loading',
      variables () {
        return {
          season: this.$currentSeason,
        };
      },
    },

  },

  created () {
  },

  methods: {
    openDetail (id) {
      this.$router.push({ name: 'team-detail', params: { id } });
    },
  },
};

</script>
