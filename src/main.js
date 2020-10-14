import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import Vuex from 'vuex';
import store from './store/mainStore';

import DefaultButton from './components/ui/DefaultButton';
import BigButtonDefault from './components/ui/BigButtonDefault';

Vue.config.productionTip = false;

//Router
Vue.use(VueRouter);

const router = new VueRouter({routes});

Vue.use(Vuex);

const menuStore = new Vuex.Store(store);

//Global Componets
Vue.component('DefaultButton', DefaultButton);
Vue.component('BigButtonDefault', BigButtonDefault);

new Vue({
	render: (h) => h(App),
	router,
	store: menuStore
}).$mount('#app');
