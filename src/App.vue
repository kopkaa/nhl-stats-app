<template>
  <div id="app">

    <app-menu></app-menu>
    <router-view/>

  <!-- 
    <img alt="Vue logo" src="./assets/logo.png">
    <app-menu></app-menu>
    <ApolloExample msg="Welcome to Your Vue.js App"/>
    <router-view></router-view> -->
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
