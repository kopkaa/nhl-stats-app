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
      class="pa-0"
      :class="{ menuCollapsed: isCollapsed, main: !isCollapsed}"
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

.menuCollapsed {
  margin-left: 5vw;
}

.v-application--wrap {
 background-color: #424242;
}
.v-navigation-drawer__content {
  background-color: #2A2A2E;
}
</style>
