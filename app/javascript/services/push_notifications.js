import axios from 'axios';
import headers from '../services/csrf_headers.js'

export default class PushNotifications {
  constructor() {
    this.request_notification_permissions()
    this.register_service_worker()
  }

  register_service_worker(){
    if (navigator.serviceWorker) {
      navigator.serviceWorker.register('/serviceworker.js', { scope: './' })
        .then(function(reg) {
          console.log('[Page] Service worker registered!');
        });
    }
  }

  request_notification_permissions(){
    if (!("Notification" in window)) {
       console.error("[push] This browser does not support desktop notification");
     }
     else if (Notification.permission === "granted") {
       console.log("[push] Permission to receive notifications has been granted");
       this.subscribe();
     }
     else if (Notification.permission !== 'denied') {
       Notification.requestPermission((permission) => {
         if (permission === "granted") {
           console.log("[push] Permission to receive notifications has been granted");
           this.subscribe();                                                       
         } 
       });
    } else {
      console.log("[push] something went wrong requestiing push notification permission")
    }
  }

  subscribe(){
    navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
      serviceWorkerRegistration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: window.vapidPublicKey
      }).then(() => { 
        this.register()
      });
    });
  }

  register(){
    console.log('[push] registering')
    navigator.serviceWorker.ready
    .then((serviceWorkerRegistration) => {
      serviceWorkerRegistration.pushManager.getSubscription()
      .then((subscription) => {
        axios.post('/push_notifications/register_user', {
           subscription: subscription.toJSON()
        }, {headers: headers()} )
      });
    });
  }

  test() {
    console.log('[push] testing')
    axios.post('/push_notifications/test', {}, {headers: headers()} )
  }
}