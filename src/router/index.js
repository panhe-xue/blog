import Vue from 'vue'
import Router from 'vue-router'
/**
 * 模块
 */
import index from './moudles/index'
import about from './moudles/about'
// ------------------------------------------------

Vue.use(Router)

const constRoutes = [
  index,
  about
]
export default new Router({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: constRoutes
})
