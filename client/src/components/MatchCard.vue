<template>
  <v-row>
    <v-col
      md="12"
    >
      {{ game.games[0].homeTeam.name }}
    </v-col>
    <v-col
      md="12"
      class="mb-4"
    >
      {{ game.games[0].awayTeam.name }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    game: Object,
  },

  created () {
  },

};
</script>

<style>

</style>
