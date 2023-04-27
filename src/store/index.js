import Vue from "vue";
import Vuex from "vuex";
import { createStore } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isHome: true
  },
  mutations: {
    setIsHome: (state, value) => {
      state.isHome = value;
    }
  },
  getters: {
    isHome: (state) => {
        return state.isHome;
    }
  },
  modules: {},
  actions: []
});
