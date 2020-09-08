<template>
  <div class="apollo-example">


  <div v-for="t of getTeams" :key="t.id">
    {{t.officialSiteUrl}}
   </div>




  </div>
</template>

<script>
import {GET_TEAMS} from '../graphql/Team.js'

export default {
  name: 'Teams',
  data () {
    return {
      conf: {},
    }
  },

  apollo: {

    getTeams: {
      query: GET_TEAMS,
      loadingKey: 'loading',
      variables: {
        season: 20192020,
      }
    }
  }
}

</script>

