<template>
  <div>
    <!-- TODO Udelat switch mezi forwards/defensemans jako taby -->
    <div
      v-for="(player, index) in getTopTen"
      :key="index"
    >

      {{ player.stats.hits }}
    </div>
  </div>
</template>
<script>
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
      return _.orderBy(this.players, "stats.hits", "desc");
    },
  },

  created() {},

  topTen(players) {},
};
</script>
