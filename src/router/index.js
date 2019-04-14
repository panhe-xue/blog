import Vue from 'vue'
import Router from 'vue-router'
/**
 * 模块
 */
import index from './moudles/index'
import about from './moudles/about'
import tags from './moudles/tags'
import works from './moudles/works'
import archive from './moudles/archive'
// ------------------------------------------------

Vue.use(Router)

const constRoutes = [
  {
    path: '',
    redirect: '/home'
  },
  index,
  about,
  tags,
  works,
  archive
]
export default new Router({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: constRoutes
})
