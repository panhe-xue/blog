export default {
  path: '/about',
  name: 'about',
  component: () => import(/* webpackChunkName: "about"  */ '@/views/index/index')
}
