<template>
  <div class="apollo-example">


  <div v-for="c of conf" :key="c.id">
    {{c.name}}
   </div>




  </div>
</template>

<script>
import {CONFS} from '../graphql/Conference.js'

export default {
  data () {
    return {
      conf: {},
    }
  },

  mounted(){
    this.$apollo.query({
      query: CONFS,
      update(data) {
        return data.getConferences
      }
    }).then(data => {
      console.log(data);
        this.conf = data.data.getConferences
    });

  }
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
