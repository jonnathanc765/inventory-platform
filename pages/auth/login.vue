<template>
  <section>
    <form @submit="onSubmit">
      <div class="form-group">
        <label for="username">Nombre de usuario</label>
        <input
          id="username"
          v-model="form.username"
          type="text"
          class="form-control"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          class="form-control"
          name="password"
        />
      </div>
      <b-button type="submit" :disabled="loading">
        <b-spinner v-if="loading" small></b-spinner>
        <span v-else>Entrar</span>
      </b-button>
    </form>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'auth',
  data() {
    return {
      loading: false,
      form: {
        username: 'root',
        password: 'jonnas.25',
      },
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      this.loading = true
      try {
        const response = await this.$axios.$post('/api/login/', this.form)

        this.$axios.setToken(response.access_token, 'Token')

        this.setUser(response)
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    },
    ...mapMutations({
      setUser: 'auth/setUser',
    }),
  },
}
</script>
