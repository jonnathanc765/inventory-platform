<template>
  <div class="home">
    <div class="container">
      <b-row class="my-5" v-if="loading">
        <b-col cols="12" class="d-flex justify-content-center">
          <b-spinner variant="primary"></b-spinner>
        </b-col>
      </b-row>
      <div class="row">
        <div
          class="col-md-4 col-sm-6"
          v-for="product of products"
          :key="product.id"
        >
          <div class="product-card" @click="goToProduct(product.id)">
            <div class="badge">Disponible</div>
            <div class="product-tumb">
              <img src="/images/generic-product.png" alt="" />
            </div>
            <div class="product-details">
              <span class="product-catagory">Tecnología</span>
              <h4>
                <a href="">{{ product.name | small_truncate }}</a>
              </h4>
              <p>
                {{ product.description | large_truncate }}
              </p>
              <div class="product-bottom-details">
                <div class="product-price">
                  <!-- <small>$96.00</small> -->
                  $ {{ product.sell_price }}
                </div>
                <div class="product-links">
                  <a href=""><i class="fa fa-heart"></i></a>
                  <a href=""><i class="fa fa-shopping-cart"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      products: [],
      loading: false,
    }
  },
  async mounted() {
    this.loading = true
    try {
      const { data } = await axios.get(
        'https://inventory-django.herokuapp.com/api/inventory/products/'
      )

      this.products = data.filter((product) => product.stock > 0)
    } catch (error) {
      console.log(error)
    }
    this.loading = false
  },
  methods: {
    goToProduct(id) {
      this.$router.push(`/products/${id}`)
    },
  },
  filters: {
    large_truncate(value) {
      if (value && value.length > 70) {
        return `${value.substr(0, 70)}...`
      }
      return value
    },
    small_truncate(value) {
      if (value && value.length > 60) {
        return `${value.substr(0, 60)}...`
      }
      return value
    },
  },
}
</script>
