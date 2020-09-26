// eslint-disable-next-line import/no-unresolved
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import AppMenu from './components/layout/AppMenu.vue';
import './styles/global.scss';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.component('app-menu', AppMenu);

new Vue({
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount('#app');
