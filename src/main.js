import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';

import DefaultButton from './components/ui/DefaultButton';
import BigButtonDefault from './components/ui/BigButtonDefault';

Vue.config.productionTip = false;

//Router
Vue.use(VueRouter);

const router = new VueRouter({routes});

//Global Componets
Vue.component('DefaultButton', DefaultButton);
Vue.component('BigButtonDefault', BigButtonDefault);

new Vue({
	render: (h) => h(App),
	router
}).$mount('#app');
