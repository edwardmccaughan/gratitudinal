import Vue from 'vue/dist/vue.esm.js';
import Vuex from 'vuex';
import CounterStore from './counter_store.js'
import GratitudesStore from './gratitudes_store.js'
import UserStore from './user_store.js'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CounterStore: CounterStore,
    GratitudesStore: GratitudesStore,
    UserStore: UserStore
  }
})