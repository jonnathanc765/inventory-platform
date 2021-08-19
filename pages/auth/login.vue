<template>
  <section>
    <form v-if="!loading" @submit="onSubmit">
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
      <b-button type="submit" variant="primary" :disabled="loading">
        <b-spinner v-if="loading" small></b-spinner>
        <span v-else>Entrar</span>
      </b-button>
      <NuxtLink to="/" class="btn btn-secondary">Volver</NuxtLink>
    </form>
    <div v-else class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <b-spinner class="my-5"></b-spinner>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'guest',
  data() {
    return {
      loading: true,
      form: {
        username: 'root',
        password: 'jonnas.25',
      },
    }
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.$router.push('/admin/products')
    }
    this.loading = false
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      this.loading = true
      try {
        await this.$auth.loginWith('local', {
          data: this.form,
        })
      } catch (error) {
        console.log(error)
      }

      this.loading = false
    },
  },
}
</script>
