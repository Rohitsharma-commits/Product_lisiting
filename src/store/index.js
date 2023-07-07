import { createStore } from 'vuex'

export default createStore({
  state: {
    products: []
  },
  mutations: {
    setProducts(state, prod){
      state.products = prod
    },
  },
  actions: {
    setProducts({commit}, prod){
      commit('setProducts', prod);
    }
  },
  getters: {
    products(state){
      return state.products;
    },
  }
})
