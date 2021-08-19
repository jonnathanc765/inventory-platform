<template>
  <section>
    <div class="row justify-content-center mt-5">
      <div class="col-md-5">
        <h3 class="my-2">Registrar nuevo producto</h3>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="sku">SKU</label>
            <input
              id="sku"
              v-model="product.sku"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input
              id="name"
              v-model="product.name"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="description">Descripción</label>
            <input
              id="description"
              v-model="product.description"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="cost_price">Precio de costo</label>
            <input
              id="cost_price"
              v-model="product.cost_price"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="sell_price">Precio de venta</label>
            <input
              id="sell_price"
              v-model="product.sell_price"
              type="text"
              class="form-control"
            />
          </div>
          <b-button variant="primary" type="submit">Guardar</b-button>
          <NuxtLink class="btn btn-secondary" to="/admin/products">
            Volver
          </NuxtLink>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      product: {
        name: '',
      },
      loading: false,
    }
  },
  async created() {
    const { id } = this.$route.params
    this.loading = true
    try {
      const response = await this.$axios.$get(`/api/inventory/products/${id}/`)
      this.product = response
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async onSubmit() {
      this.loading = true
      try {
        await this.$axios.$put(
          `/api/inventory/products/${this.$route.params.id}/`,
          this.product
        )
        this.$router.push('/admin/products')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
