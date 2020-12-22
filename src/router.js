import Router from 'vue-router';
import teamRoutes from './modules/team/router';
import tableRoutes from './modules/table/router';
import gameRoutes from './modules/game/router';
import Dashboard from './views/Dashboard.vue';

const baseRoutes = [{
  path: '/dashboard',
  name: 'dashboard',
  component: Dashboard,
},
{
  path: '*',
  redirect: { name: 'dashboard' },
},
];

const routes = baseRoutes.concat(
  gameRoutes,
  teamRoutes,
  tableRoutes,
);

export default new Router({
  mode: 'history',
  routes,
});
