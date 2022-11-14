import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
import { RootState } from "./types";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const dataState = createPersistedState({
  key: "vuex",
  paths: ["profile", "auth"],
});

export default new Vuex.Store<RootState>({
  state: {
    version: "1.0.0", // a simple property
  },
  modules,
  mutations: {},
  actions: {},
  plugins: [dataState],
});
