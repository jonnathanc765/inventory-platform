<template>
  <div>
    <h4 class="my-3">Lista de productos</h4>
    <table class="table">
      <thead>
        <th>#</th>
        <th>Nombre</th>
        <th>Precio Costo</th>
        <th>Precio venta</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="product of products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>$ {{ product.cost_price }}</td>
          <td>$ {{ product.sell_price }}</td>
          <td>
            <b-button>Editar</b-button>
          </td>
        </tr>
      </tbody>
      <div v-if="loading" class="d-flex justify-content-center">
        <b-spinner></b-spinner>
      </div>
    </table>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      loading: false,
      products: [],
      offset: 0,
      paginationData: {
        next: undefined,
      },
    }
  },
  async mounted() {
    await this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      this.loading = true
      try {
        const data = await this.$axios.$get(
          `/api/inventory/products/?limit=12&offset=${this.offset}`
        )
        this.products.push(...data.results)
        delete data.results
        this.paginationData = data
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    },
  },
}
</script>
