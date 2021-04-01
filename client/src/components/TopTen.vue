<template lang="">
  <div />
</template>
<script>
export default {
  name: 'TopTen',

  props: {
    players: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },

  data () {
    return {};
  },

  computed: {
    topTenPlayers () {
      return this.players;
    },
  },

  created () {

  },
};
</script>
