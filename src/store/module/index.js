/** 首页 */
const state = {
  header: {
    text: 'HOME',
    backgroundColor: 'blue',
    note: '吃亏才是福',
    index: '1'
  }
}
const mutations = {
  header (state, obj) {
    state.header = obj
  }
}
const actions = { }

export default {
  state,
  mutations,
  actions
}
