<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-5">
        <h4>Auth page</h4>
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  mounted() {
    const authData = window.localStorage.getItem('auth')
    if (authData) {
      this.setUser(authData)
    }
  },
  methods: {
    ...mapMutations({
      setUser: 'auth/setUser',
    }),
  },
}
</script>
