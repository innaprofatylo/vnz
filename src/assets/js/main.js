import App from './App.vue';
import Result from './components/Result.vue';

Vue.config.productionTip = false;

new Vue({
	el: '#test',
	template: '<App/>',
	components: {App}
})

new Vue({
	el: '#box-card',
	template: '<Result/>',
	components: {Result}
})
