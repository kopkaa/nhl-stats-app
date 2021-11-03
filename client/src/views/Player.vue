<template>
  <v-container class="pa-10 h-100">
    {{ player.fullName }}
  </v-container>
</template>

<script>
import { GET_PLAYER } from '../models/Player';

export default {
  name: 'Team',

  data () {
    return {
      player: null,
      loading: true,
    };
  },

  apollo: {
    getPlayer: {
      query: GET_PLAYER,
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

  async created () {
    await this.fetchData();
  },

  methods: {
    fetchData () {
      this.$apollo.queries.getPlayer.skip = false;
      this.$apollo.queries.getPlayer.refetch().then((result) => {
        this.team = result.data.getPlayer;
        this.loading = false;
      });
    },
  },
};
</script>
