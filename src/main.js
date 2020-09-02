import Vue from 'vue'
import App from './App.vue'
import AppMenu from './components/AppMenu';
import VueRouter from 'vue-router';
import { createProvider } from './vue-apollo'
import HelloWorld from './components/HelloWorld';

Vue.config.productionTip = false

Vue.component('app-menu', AppMenu);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/match',
      component: HelloWorld,
      children: [
        {
          path: ':id',
          component: HelloWorld,
        }
      ]
    }
  ]
})


new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
