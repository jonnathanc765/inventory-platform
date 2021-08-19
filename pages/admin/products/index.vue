<template>
  <div>
    <div
      class="d-flex justify-content-between flex-row align-items-center my-2"
    >
      <h4 class="my-3">Lista de productos</h4>
      <NuxtLink to="/admin/products/create" class="btn btn-success">
        Nuevo producto
      </NuxtLink>
    </div>
    <div class="form-group">
      <b-input v-model="keyword" />
    </div>
    <table class="table">
      <thead>
        <th>SKU</th>
        <th>Nombre</th>
        <th>Precio Costo</th>
        <th>Precio venta</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="product of products" :key="product.id">
          <td>{{ product.sku }}</td>
          <td>{{ product.name }}</td>
          <td>$ {{ product.cost_price }}</td>
          <td>$ {{ product.sell_price }}</td>
          <td>
            <NuxtLink
              class="btn btn-primary"
              :to="`/admin/products/${product.id}`"
            >
              Editar
            </NuxtLink>
            <b-button variant="danger">Borrar</b-button>
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
  middleware: 'auth',
  data() {
    return {
      time: undefined,
      loading: false,
      keyword: '',
      products: [],
      offset: 0,
      paginationData: {
        next: undefined,
      },
    }
  },
  watch: {
    keyword(_, __) {
      this.loading = true
      clearTimeout(this.time)
      this.time = setTimeout(() => {
        this.fetch(true)
      }, 500)
    },
  },
  async mounted() {
    await this.fetch()
  },
  methods: {
    async fetch(reset = false) {
      if (reset) {
        this.offset = 0
        this.products = []
      }
      this.loading = true
      try {
        const data = await this.$axios.$get(
          `/api/inventory/products/?limit=12&offset=${this.offset}&keyword=${this.keyword}`
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
