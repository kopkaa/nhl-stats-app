<template>
  <div>
  <sidebar-menu :menu="menu" :width="menuWidth"></sidebar-menu>
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
      menu: [
        {
          header: true,
          title: 'NHL - STATS APP',
          hiddenOnCOllapse: true
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa fa-user'
        },
        {
          href: '/match',
          title: 'Zapasy',
          icon: 'fa fa-user'
        },
        {
          href: '/tables',
          title: 'Tabulky',
          icon: 'fa fa-user'
        },
      ]
    }
  },

  created() {
    console.log('MENU CREATED');
    console.log(this.$router);
  },

  mounted() {
    console.log('MENU MOUNTED');
  }
}

</script>

