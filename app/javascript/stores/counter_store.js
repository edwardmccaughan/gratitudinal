export default {
  namespaced: true,
  state: {
    counter: 0
  },
  mutations: {
    increment: state => {
      state.counter++
    }
  },
  actions: {
  },
  getters: {
    doubleClicks: state => {
      return state.counter * 2
    }
  }
}