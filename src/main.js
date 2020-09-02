import Vue from 'vue'
import App from './App.vue'
import AppMenu from './components/AppMenu';
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

Vue.component('app-menu', AppMenu);

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
