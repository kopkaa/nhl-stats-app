<template>
  <div class="apollo-example">

    <!-- Apollo watched Graphql query -->
   <div v-for="conf of getConference" :key="conf.id">
    {{conf.name}}
   </div>




  </div>
</template>

<script>
import {CONFS} from '../graphql/Conference.js'
//import gql from "graphql-tag";

export default {
  data () {
    return {
      conf: {},
    }
  },

  apollo: {
    getConference: {
      query: CONFS,
      update(data) {
        return data.getConferences;
      }, 
    },
  },

  
}

</script>

<style scoped>
.form,
.input,
.apollo,
.message {
  padding: 12px;
}

label {
  display: block;
  margin-bottom: 6px;
}

.input {
  font-family: inherit;
  font-size: inherit;
  border: solid 2px #ccc;
  border-radius: 3px;
}

.error {
  color: red;
}

.images {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 300px;
  grid-gap: 10px;
}

.image-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ccc;
  border-radius: 8px;
}

.image {
  max-width: 100%;
  max-height: 100%;
}

.image-input {
  margin: 20px;
}
</style>
