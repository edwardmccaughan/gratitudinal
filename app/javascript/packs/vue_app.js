// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.



require("@rails/ujs").start()
require("bootstrap/dist/js/bootstrap")

//TODO: not sure about this...
// require("@serviceworker-companion.js")

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';

import store from '../stores/store.js'
import routes from '../routes.js'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

const router = new VueRouter({ routes })

document.addEventListener('DOMContentLoaded', () => {
  console.log('vue_app')
  window.app = new Vue({store, router}).$mount('#app')
  checkNotifs()

  document.getElementById("notification").addEventListener("click", window.sendKeys) 
})


// serviceworker thing

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/serviceworker.js', { scope: './' })
    .then(function(reg) {
      console.log('[Page] Service worker registered!');
    });
}



import axios from 'axios';

// TODO: this could be in a global helper
const headers = () => {
  const token = document.querySelector('[name="csrf-token"]') || {content: 'no-csrf-token'}
  return { 
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token.content 
        }
}

function checkNotifs(obj){
  console.log("checkNotifs running")
  if (!("Notification" in window)) {                                             //1
       console.error("This browser does not support desktop notification");
     }
     // Let's check whether notification permissions have already been granted
     else if (Notification.permission === "granted") {                           //2
       console.log("Permission to receive notifications has been granted");
       getKeys();
     }
     // Otherwise, we need to ask the user for permission
     else if (Notification.permission !== 'denied') {                            //3
       Notification.requestPermission(function (permission) {                    
             // If the user accepts, let's create a notification
         if (permission === "granted") {                                         //4
           console.log("Permission to receive notifications has been granted");
           getKeys();                                                       
         } 
       });
    }
}

function getKeys(){
 // navigator.serviceWorker.register('/serviceworker.js', {scope: './'})          //5
 //   .then(function(registration) {
 //     return registration.pushManager.getSubscription()
 //       .then(function(subscription) {
 //         if (subscription) {
 //           return subscription;
 //         }
 //         return registration.pushManager.subscribe({                           //6
 //           userVisibleOnly: true,
 //           applicationServerKey: vapidPublicKey
 //         });
 //       });
 //   }).then(function(subscription) {
 //     sendKeys(subscription.toJSON())                                           //7
 //   });

  navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: window.vapidPublicKey
    });
    console.log('service worker supposedly subscribed...')
  });


}

window.sendKeys = function(subscription){
 // $.post('/sendkeys', {
 //     subscription: subscription,
 //     message: 'You clicked a button!'
 //   });

  navigator.serviceWorker.ready
  .then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager.getSubscription()
    .then((subscription) => {
      // $.post("/push", { subscription: subscription.toJSON(), message: "You clicked a button!" });
      axios.post('/push', {
         subscription: subscription.toJSON(),
         message: 'You clicked a button!'
      }, {headers: headers()} )
    });
  });



}