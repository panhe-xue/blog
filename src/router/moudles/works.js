export default {
  path: '/works',
  name: 'works',
  component: () => import(/* webpackChunkName: "about"  */ '@/views/works/index')
}
