export const state = () => ({
  user: null,
  access_token: null,
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload.user
    state.access_token = payload.access_token
  },
  purge() {
    state.user = null
  },
}
