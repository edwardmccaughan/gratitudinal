import Vue from 'vue/dist/vue.esm.js';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
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
})