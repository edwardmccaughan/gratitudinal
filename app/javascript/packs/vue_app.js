// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("bootstrap/dist/js/bootstrap")

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';

import store from '../stores/store.js'
import routes from '../routes.js'

import PushNotifications from '../services/push_notifications.js'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

const router = new VueRouter({ routes })

document.addEventListener('DOMContentLoaded', () => {
  console.log('vue_app')
  window.app = new Vue({store, router}).$mount('#app')
  window.pushNotifications = new PushNotifications()
})