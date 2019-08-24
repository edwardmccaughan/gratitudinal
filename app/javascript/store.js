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
    gratitude: {}
  },
  mutations: {
    many(state,payload) {
      state.gratitudes = payload
    },
    one(state, payload){
      state.gratitude = payload
    }
  },
  actions: {
    index(context, query) {
      const url =  'gratitudes.json'
      axios.get(url).then(response => {
        context.commit('many', response.data);
      })
    },
    show(context, id) {
      const url =  `gratitudes/${id}.json`
      axios.get(url).then(response => {
        context.commit('one', response.data);
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