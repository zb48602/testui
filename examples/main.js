import Vue from 'vue';
import App from './App.vue';
import newbieUI from '../packages';

Vue.config.productionTip = false;
Vue.use(newbieUI);

new Vue({
    render: h => h(App)
}).$mount('#app')
