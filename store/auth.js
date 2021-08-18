import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      user: null,
      access_token: null,
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload.user
        state.access_token = payload.access_token
      },
      purge(state) {
        state.user = null
      },
    },
    // plugins: [vuexLocal.plugin],
  })

export default store
