<template>
  <div>
  <sidebar-menu :menu="menu" @toggle-collapse="onToggleCollapse()" :collapsed="isCollapsed" :width="menuWidth">
    <span slot="toggle-icon">
      <i class="fa fa-arrow-right" v-if="isCollapsed"></i>
      <i class="fa fa-arrow-left" v-if="!isCollapsed"></i>
    </span>
  </sidebar-menu>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

export default {
  name: 'AppMenu',
  components: {
    SidebarMenu
  },
  
  data () {
    return {
      menuWidth: '20vw',
      isCollapsed: false,
      menuTitle: 'NHL - STATS APP',
      menu: [],
    }
  },

  created() {
    console.log('MENU CREATED');
    console.log(this.$router);
    this.menu = [
      {
        header: true,
        title: this.menuTitle,
        hiddenOnCOllapse: true
      },
      {
        href: '/',
        title: 'Dashboard',
        icon: 'fa fa-home'
      },
      {
        href: '/games',
        title: 'Zapasy',
        icon: 'fa fa-calendar'
      },
      {
        href: '/tables',
        title: 'Tabulky',
        icon: 'fa fa-table'
      },
    ]
  },

  methods: {
    onToggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
      if (this.isCollapsed) {
        this.menu[0].title = 'NHL';
      } else {
        this.menu[0].title = this.menuTitle;
      }
    },
  }
}

</script>

