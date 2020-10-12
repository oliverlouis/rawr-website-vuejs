import Vue from 'vue';
import App from './App.vue';
import DefaultButton from './components/ui/DefaultButton';

Vue.config.productionTip = false;

Vue.component('DefaultButton', DefaultButton);

new Vue({
	render: (h) => h(App)
}).$mount('#app');
