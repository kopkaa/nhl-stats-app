<template>
  <div>
    {{ forwards }}
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
    forwards() {
      return _.filter(this.players, (player) => {
        return player.positionCode !== "D";
      });
    },
  },

  created() {
    console.log("PLAYEERS", this.players);
  },
};
</script>
