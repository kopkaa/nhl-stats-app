/* eslint-disable no-undef */ /* eslint-disable no-undef */
<template>
  <div class="d-flex flex-row card__topTen">
    <!-- TODO Udelat switch mezi forwards/defensemans jako taby -->
    <div class="flex-grow-1 d-flex  align-center flex-column pt-4">
      <v-avatar
        size="100"
        color="blue-grey lighten-5"
      >
        <v-img
          :lazy-src="showedPlayer.playerPhotoUrl"
          :src="showedPlayer.playerPhotoUrl"
        />
      </v-avatar>
      <div class="mt-3 text-center">
        <span class="body-1">#{{ showedPlayer.primaryNumber }} | </span>
        <span class="body-1">{{ showedPlayer.fullName }}</span><br>
        <span class="grey--text text--lighten-2">{{ showedPlayer.positionCode }}</span>
      </div>

      <div class="mt-7 text-center">
        <span
          class="text-uppercase  subtitle-2 blue--text text--lighten-3"
          color="#64B5F6"
        >Body</span><br>
        <span class="display-1">{{ showedPlayer.stats.points }}</span><br>
      </div>

      <div class="mt-7 d-flex w-100 pa-4 justify-center">
        <!-- TODO udelat tooltip timeonice average -->
        <span
          class="text-uppercase  subtitle-1 mr-5"
        ><span class="blue--text text--lighten-3 mr-1">G:</span>
          {{ showedPlayer.stats.goals }}</span><br>
        <span
          class="text-uppercase  subtitle-1 mr-5"
        ><span class="blue--text text--lighten-3 mr-1">A:</span>
          {{ showedPlayer.stats.assists }}</span><br>
        <span
          class="text-uppercase  subtitle-1"
        ><span class="blue--text text--lighten-3 mr-1">toi:</span>
          {{ showedPlayer.stats.timeOnIcePerGame }}</span><br>
      </div>
    </div>
    <div class="flex-grow-2 pb-4">
      <ul
        v-for="(player, index) in topTen"
        :key="index"
        class="d-flex justify-space-between subtitle-2"
        @mouseover="showPlayer(player)"
      >
        <span class="mr-12 mt-4 ">{{ player.fullName }}</span>
        <span class="mr-8 mt-4">{{ player.stats.points }}</span>
      </ul>
    </div>
  </div>
</template>
<script>
// TODO topten of all teams
export default {
  name: 'TopTen',

  props: {
    players: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      showedPlayer: 'cs',
      imgLoaded: false,
    };
  },

  computed: {
    topTen() {
      return _.take(
        _.orderBy(
          _.filter(_.reject(this.players, { positionCode: 'G' }), (player) => player.stats),
          'stats.points', // TODO Points, Goal, Assists zalozky a u kazdeho vyber Obrance/Utok
          'desc',
        ),
        10,
      );
    },
  },

  created() {
    this.showedPlayer = this.topTen[0];
  },

  methods: {
    showPlayer(player) {
      this.showedPlayer = player;
    },
  },
};
</script>
