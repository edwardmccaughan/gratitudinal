// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()

import Vue from 'vue'
import VueRouter from 'vue-router'



import GratitudeShow from '../components/GratitudeShow.vue'

Vue.use(VueRouter)


const routes = [
  { path: '/gratitudes/:id', component: GratitudeShow }
]

const router = new VueRouter({ routes })


document.addEventListener('DOMContentLoaded', () => {


  window.app = new Vue({router}).$mount('#app')
})