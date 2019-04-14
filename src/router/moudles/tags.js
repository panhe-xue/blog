export default {
  path: '/tags',
  name: 'tags',
  component: () => import(/* webpackChunkName: "about"  */ '@/views/tags/index')
}
