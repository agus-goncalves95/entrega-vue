import Vue from 'vue'
import App from './App.vue'
import '@popperjs/core';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import vuetify from './plugins/vuetify'
import router from './router'
Vue.config.productionTip = false

global.jQuery = require('jquery');
require('bootstrap');

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
