import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AppMenu from './components/layout/AppMenu';
import { createProvider } from './vue-apollo';



Vue.config.productionTip = false

Vue.component('app-menu', AppMenu);


new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
