import Router from 'vue-router';
import Dashboard from '@/Dashboard.vue';
import gameRoutes from '@/modules/game/router';
import teamRoutes from '@/modules/team/router';


const baseRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '*',
    redirect: { name: 'dashboard' },
  },
];

const routes = baseRoutes.concat(gameRoutes, teamRoutes);
export default new Router({
  mode: 'history',
  routes,
});