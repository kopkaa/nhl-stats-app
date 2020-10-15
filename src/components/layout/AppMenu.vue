<template>
  <div>
    <sidebar-menu
      :menu="menu"
      :collapsed="isCollapsed"
      :width="menuWidth"
      @toggle-collapse="onToggleCollapse()"
    >
      <span slot="toggle-icon">
        <i
          v-if="isCollapsed"
          class="fa fa-arrow-right"
        />
        <i
          v-if="!isCollapsed"
          class="fa fa-arrow-left"
        />
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
    SidebarMenu,
  },

  data () {
    return {
      menuWidth: '15vw',
      isCollapsed: false,
      menuTitle: 'NHL - STATS APP',
      menu: [],
    };
  },

  created () {
    this.menu = [
      {
        header: true,
        title: this.menuTitle,
        hiddenOnCOllapse: true,
      },
      {
        href: '/dashboard',
        title: 'Dashboard',
        icon: 'fa fa-home',
      },
      {
        href: '/games',
        title: 'Zapasy',
        icon: 'fa fa-calendar',
      },
      {
        href: '/teams',
        title: 'Týmy',
        icon: 'fa fa-users',
      },
    ];
  },

  methods: {
    onToggleCollapse () {
      this.isCollapsed = !this.isCollapsed;
      if (this.isCollapsed) {
        this.menu[0].title = 'NHL';
      }
      else {
        this.menu[0].title = this.menuTitle;
      }
      this.$emit('menuCollapsed', this.isCollapsed);
    },
  },
};

</script>
