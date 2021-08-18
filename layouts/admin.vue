<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <b-button @click="logout">Cerrar sesión</b-button>
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  auth: true,
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
