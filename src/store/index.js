import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: window.Util.getQueryString('token'),
    loadingShow: false
  },
  mutations: {
    LOADINGSHOW (state) {
      state.loadingShow = true
    },
    LOADINGHIDEN (state) {
      state.loadingShow = false
    }
  },
  actions: {

  },
  modules: {
  },
  getters: {
    token: state => state.token
  }
})
