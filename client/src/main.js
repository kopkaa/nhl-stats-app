import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import AppMenu from './components/layout/AppMenu.vue';
import './styles/global.scss';
import { createProvider } from './vue-apollo';
import vuetify from './plugins/vuetify';
import todayDateMixin from './mixins/todayDateMixin';

const _ = require('lodash');

Vue.config.productionTip = false;
Vue.prototype.$currentSeason = 20212022;

Vue.use(VueRouter);
Vue.mixin(todayDateMixin);

Vue.component('app-menu', AppMenu);

new Vue({
  router,
  apolloProvider: createProvider(),
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
