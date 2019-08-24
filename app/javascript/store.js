// import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
import axios from 'axios';

// Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gratitudes: [],
    apiUrl: '/gratitudes.json'
  },
  mutations: {
    setGratitudes(state,payload) {
      state.gratitudes = payload
    }
  },
  actions: {
    async getGratitudes({ state, commit }) {
      try {
        let response = await axios.get(`${state.apiUrl}`);
        commit('setGratitudes', response.data);
      } catch (error) {
          commit('setGratitudes', []);
      }
  }
})