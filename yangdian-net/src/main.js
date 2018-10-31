import Vue from 'vue'
// main.js 为入口文件，并与app.vue组件向关联使此组件为跟组件
import App from './App.vue'
// 是所有的内容都在app.vue 上面呈现。
import router from './router'
// 在router里配置路由，将app组件相关联
import global_menuBar from './plugins/global_menuBar.js'
 // vue-cli @vue/cli将px转换成rem单位配置
import 'lib-flexible/flexible.js'

import VueTouch from 'vue-touch'

// import store from './pages/store/index.js'

// 插入样式
import './style/common.css'
import './style/iconfont.css'
Vue.config.productionTip=false

Vue.use(global_menuBar)
Vue.use(VueTouch,{name: 'v-touch'})
VueTouch.config.swipe = {

             threshold: 100 //手指左右滑动距离

        }
new Vue({
	router,
	// store,
	render: h => h(App)
}).$mount('#app')

