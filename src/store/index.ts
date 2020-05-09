import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    cartbox: [],
    menuActive: true,
    showNav: false
  },

  getters: {

  },
  
  mutations: {

    async getProducts(state) {

      try {
        const res = await axios.get(`http://localhost:3000/grocery`);
        state.items = res.data;
        
        } catch(e) {
          console.error(e);
        }

    },

    activeMenu(state) {
      state.menuActive = !state.menuActive
    },

    cartDesactive(state) {
      const mq = window.matchMedia("(min-width: 768px)").matches;

      if (mq) {
        state.menuActive = true;
        state.showNav = false;
      } else {
        state.menuActive = false;
        state.showNav = true;
      }
    },

    removeItem(state, index) {
      state.cartbox.splice(index, 1);
    },

  },
  actions: {
  },
  modules: {
  }
})
