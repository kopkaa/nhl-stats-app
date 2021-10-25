import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Games from "./views/Games.vue";
import TablePage from "./views/TablePage.vue";
import Teams from "./views/Teams.vue";
import Team from "./views/Team.vue";

const routes = [{
  path: "/dashboard",
  name: "dashboard",
  component: Dashboard,
},
{
  path: "*",
  redirect: { name: "dashboard" },
},
{
  path: "/games",
  name: "games",
  component: Games,
},
{
  path: "/tables",
  name: "table",
  component: TablePage,
},
{
  path: "/teams",
  name: "teams",
  component: Teams,
},
{
  name: "team-detail",
  path: "/team/:id",
  component: Team,
},
];

export default new Router({
  mode: "history",
  routes,
});
