import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
const _ = require('lodash');

Vue.use(Router);


const defaultRoutes = [
    {
      path: '/hi',
      name: 'App',
      component: App,
    }
  ]


var allRoutes = [];
const requireModule = require.context('./modules', true, /\.js$/);
const importedRoutes = [];

requireModule.keys().forEach(fileName => {
	let str = fileName.split('/');
	str = str[1];
	if ( fileName === `./${str}/router/index.js` ) {
		
		_.camelCase(
			fileName.replace(/(\.\/|\.js)/g, ''))
		}
    console.log('FILENAMEE', fileName);
		

		importedRoutes.push(...requireModule(fileName).default);
});


allRoutes = allRoutes.concat(defaultRoutes, importedRoutes);
const routes = allRoutes;

export default new Router({
	mode: 'history',
	routes
})