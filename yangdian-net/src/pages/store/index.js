import Vue from 'vue'
import Vuex from 'vuex'
import stateData from './state.js'
import mutationsFn from './mutations.js'
Vue.use(Vuex)

export default new Vuex.Store({
	state:stateData,
	mutations:mutationsFn
})