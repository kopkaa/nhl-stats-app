<template>
  <div class="d-flex flex-row">
    <!-- TODO Udelat switch mezi forwards/defensemans jako taby -->
    <div class="flex-grow-1">
      CSS
    </div>
    <div class="flex-grow-2">
      <ul
        v-for="(player, index) in getTopTen"
        :key="index"
      >
        {{ player.fullName }} {{player.stats.points}}
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
      return _.orderBy(this.players, "stats.points", "desc");
    },
  },

  created() {},

  topTen(players) {},
};
</script>
