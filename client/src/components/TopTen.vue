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
      <span class="mt-2">{{showedPlayer.fullName}}</span>
    </div>
    <div class="flex-grow-2 pb-4">
      <ul
        v-for="(player, index) in topTen"
        :key="index"
        @mouseover="showPlayer(player)"
        class="d-flex justify-space-between subtitle-2"
      >
        <span class="mr-12 mt-4 ">{{ player.fullName }}</span> <span class="mr-8 mt-4">{{player.stats.points}}</span>
      </ul>
    </div>
  </div>
</template>
<script>
//TODO topten of all teams
export default {
  name: "TopTen",

  props: {
    players: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      showedPlayer: null,
      imgLoaded: false,
    };
  },

  computed: {
    topTen(filterBy) {
      return _.take(
        _.orderBy(
          _.filter(
            _.reject(this.players, { positionCode: "G" }),
            (player) => player.stats
          ),
          "stats.points", // TODO Points, Goal, Assists zalozky a u kazdeho vyber Obrance/Utok
          "desc"
        ),
        10
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
