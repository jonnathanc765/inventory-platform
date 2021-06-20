<template>
  <section>
    <main>
      <div v-if="loading" class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="my-5 py-5 d-flex justofy-content-center">
              <h4 class="text-center">Cargando...</h4>
              <b-spinner variant="primary"></b-spinner>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="container">
        <div class="grid second-nav">
          <div class="column-xs-12">
            <nav>
              <ol class="breadcrumb-list">
                <li class="breadcrumb-item">
                  <a href="#">Productos</a>
                </li>
                <li class="breadcrumb-item active">{{ product.name }}</li>
                <!-- <li class="breadcrumb-item active">Bonsai</li> -->
              </ol>
            </nav>
          </div>
        </div>
        <div class="container product">
          <div class="row">
            <div class="col-xs-12 col-md-7">
              <div class="product-gallery">
                <div class="product-image">
                  <img class="active" src="/images/generic-product.png" />
                </div>
                <ul class="image-list">
                  <li class="image-item">
                    <img src="/images/generic-product.png" />
                  </li>
                  <li class="image-item">
                    <img src="/images/generic-product.png" />
                  </li>
                  <li class="image-item">
                    <img src="/images/generic-product.png" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xs-12 col-md-5">
              <h1>{{ product.name }}</h1>
              <h2>${{ product.sell_price }}</h2>
              <div class="description" v-html="product.description"></div>
              <!-- <button class="add-to-cart">Add To Cart</button> -->
            </div>
          </div>
        </div>
        <!-- <div class="container related-products">
          <div class="col-md-12">
            <h3>Tambien puedes ver</h3>
          </div>
          <div class="row">
            <div class="col-md-4">
              <img src="https://source.unsplash.com/miziNqvJx5M" />
              <h4>Succulent</h4>
              <p class="price">$19.99</p>
            </div>
            <div class="col-md-4">
              <img src="https://source.unsplash.com/2y6s0qKdGZg" />
              <h4>Terranium</h4>
              <p class="price">$19.99</p>
            </div>
            <div class="col-md-4">
              <img src="https://source.unsplash.com/6Rs76hNbIWE" />
              <h4>Cactus</h4>
              <p class="price">$19.99</p>
            </div>
          </div>
        </div> -->
      </div>
    </main>
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
        `https://inventory-django.herokuapp.com/api/inventory/products/${this.$route.params.id}/`
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
