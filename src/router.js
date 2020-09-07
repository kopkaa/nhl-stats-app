import Router from 'vue-router';
import Dashboard from '@/Dashboard.vue';
import gameRoutes from '@/modules/game/router';


const baseRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    title: 'Dashboard',
    icon: 'fa-tachometer',
    component: Dashboard,
  },
  {
    path: '*',
    redirect: { name: 'dashboard' },
  },
];

const routes = baseRoutes.concat(gameRoutes);
export default new Router({
  mode: 'history',
  routes,
});