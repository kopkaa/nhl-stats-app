import Teams from './components/Teams.vue';
import TeamDetail from './views/TeamDetail.vue';

const routes = [
  {
    path: '/teams',
    name: 'teams',
    component: Teams,
  },
  {
    name: 'team-detail',
    path: '/team/:id',
    component: TeamDetail,
  },
];

export default routes;
