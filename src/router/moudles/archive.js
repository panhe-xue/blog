export default {
  path: '/archive',
  name: 'archive',
  component: () => import(/* webpackChunkName: "about"  */ '@/views/archive/index')
}
