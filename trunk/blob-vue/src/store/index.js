import Vue from 'vue';
import Vuex from 'vuex';
import tab from './modules/tab';
import userInfo from './modules/userInfo';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tab,
    userInfo,
  },
  getters
});

export default store
