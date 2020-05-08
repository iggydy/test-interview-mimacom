import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartbox: [],
    menuActive: true
  },

  getters: { 
  },
  
  mutations: {

    activeMenu(state) {
      state.menuActive = !state.menuActive
    },

    cartDesactive(state) {
      const mq = window.matchMedia("(min-width: 768px)").matches;

      if (mq) {
        state.menuActive = true;
      } else {
        state.menuActive = false;
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
