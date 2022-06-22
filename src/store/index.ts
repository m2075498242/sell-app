import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goodsList: [],
  },
  getters: {},
  mutations: {
    getData(state, data): void {
      state.goodsList = JSON.parse(JSON.stringify(data));
      // console.log(data);
    },
  },
  actions: {},
  modules: {},
});
