// 创建一个全局插件
import MenuBar from '.././components/MenuBar.vue'
const MyPlugin = {}
MyPlugin.install = function(Vue){
	Vue.component("MenuBar",MenuBar)
}
export default MyPlugin