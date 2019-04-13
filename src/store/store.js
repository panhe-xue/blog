import Vue from 'vue'
import Vuex from 'vuex'

/**
 * 模块引入
 */
import index from './module/index'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    index
  },
  getters
})
