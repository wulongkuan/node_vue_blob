// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from '@/assets/api.js';
import store from "@/store/index.js";
import axios1   from 'axios';
Vue.prototype.$axios = axios
Vue.prototype.$as = axios1
// Vue.use(VueRouter);


Vue.config.productionTip = false
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
