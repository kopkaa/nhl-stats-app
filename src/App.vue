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
    console.log('APP', this.$season);
  },
  methods: {
    menuCollapse (value) {
      this.isCollapsed = value;
    },
  },

};
</script>
