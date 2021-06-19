<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-5">
          <h3>#{{ $route.params.id }} {{ product.name }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      loading: false,
      product: {},
    }
  },
  async mounted() {
    this.loading = true
    try {
      const { data } = await axios.get(
        `https://inventory-django.herokuapp.com/api/inventory/products/${this.$route.params.id}`
      )
      this.product = data
    } catch (error) {
      console.log(error)
      alert('Ha ocurrido un error')
    }
    this.loading = false
  },
}
</script>
