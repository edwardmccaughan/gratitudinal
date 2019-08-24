import Vue from 'vue/dist/vue.esm.js';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const counter_module = {
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

const gratitudes_module = {
  namespaced: true,
  state: {
    gratitudes: [],
    apiUrl: 'http://localhost:3000/gratitudes.json'
  },
  mutations: {
    setGratitudes(state,payload) {
      state.gratitudes = payload
    }
  },
  actions: {
    index(state, query) {
      const url =  'gratitudes.json'
      axios.get(url)
      .then(response => {
        state.commit('setGratitudes', response.data);
      })
    }
  }
}

export default new Vuex.Store({
  modules: {
    counter: counter_module,
    gratitudes: gratitudes_module
  }
})