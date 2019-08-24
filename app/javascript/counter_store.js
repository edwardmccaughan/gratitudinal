import Vue from 'vue/dist/vue.esm.js';
import Vuex from 'vuex';

Vue.use(Vuex);

const counter_module = {
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

const gratitudes_module = {
  state: {
    gratitudes: []
  }
}



export default new Vuex.Store({
  modules: {
    counter: counter_module,
    gratitudes: gratitudes_module
  }
})