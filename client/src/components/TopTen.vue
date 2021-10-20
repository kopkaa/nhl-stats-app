<template>
  <div class="d-flex flex-row">
    <!-- TODO Udelat switch mezi forwards/defensemans jako taby -->
    <div class="flex-grow-1">
      CSS
    </div>
    <div class="flex-grow-2 pb-4">
      <!-- TODO pridat fotky hracu -->
      <ul
        v-for="(player, index) in getTopTen"
        :key="index"
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
    return {};
  },

  computed: {
    getTopTen(filterBy) {
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
    console.log("Players", this.players);
  },

  topTen(players) {},
};
</script>
