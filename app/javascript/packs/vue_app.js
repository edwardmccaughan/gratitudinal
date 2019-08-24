// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';

import store from '../store.js'

import GratitudeShow from '../components/GratitudeShow.vue'
import GratitudeIndex from '../components/GratitudeIndex.vue'
import GratitudeNew from '../components/GratitudeNew.vue'
import Counter from '../components/Counter.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false


const routes = [
  { path: '/gratitudes/new', component: GratitudeNew },
  { path: '/gratitudes/:id', component: GratitudeShow },
  { path: '/gratitudes', component: GratitudeIndex },
]

const router = new VueRouter({ routes })

document.addEventListener('DOMContentLoaded', () => {
  Vue.component('counter', Counter);
  window.app = new Vue({store, router}).$mount('#app')
})