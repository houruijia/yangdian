import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import global_menuBar from '.plugins/global_menuBar.js'

Vue.config.productionTip=false

Vue.use(global_menuBar)

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

