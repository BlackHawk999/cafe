import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deserts: [],
  },
  mutations: {},
  actions: {
    GET_DESERTS_FROM_API({ commit }) {},
  },
  getters: {
    DESERTS(state) {
      return state.deserts;
    },
  },
  modules: {},
});
