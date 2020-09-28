<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      class="nav"
      :width="navigatorWidth"
      app
    >
      <app-menu @menuCollapsed="menuCollapse" />
    </v-navigation-drawer>

    <v-main
      class="main pa-0"
    >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isCollapsed: false,
    };
  },
  computed: {
    navigatorWidth () {
      return this.isCollapsed ? '50px' : '15vw';
    },
  },
  created () {
    console.log('APP');
  },
  methods: {
    menuCollapse (value) {
      this.isCollapsed = value;
    },
  },

};
</script>

<style>
.main {
  margin-left: 15vw;

}
.v-application--wrap {
 background-color: #424242;
}
.v-navigation-drawer__content {
  background-color: #2A2A2E;
}
</style>
