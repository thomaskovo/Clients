import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAeKopqg2CnR9HiVXM-IIDw_6tx5WutWfQ",
  authDomain: "clients-b5034.firebaseapp.com",
  databaseURL: "https://clients-b5034.firebaseio.com",
  projectId: "clients-b5034",
  storageBucket: "",
  messagingSenderId: "631075501279",
  appId: "1:631075501279:web:878301cbb2a060bc5ba56a"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
