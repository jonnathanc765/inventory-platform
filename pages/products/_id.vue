<template>
  <main>
    <template v-if="!not_found">
      <template v-if="!loading">
        <!-- <div class="page-top-info">
          <div class="container">
            <h4>Category PAge</h4>
            <div class="site-pagination">
              <a href="">Home</a> /
              <a href="">Shop</a>
            </div>
          </div>
        </div> -->
        <section class="product-section">
          <div class="container">
            <!-- <div class="back-link">
              <a href="./category.html"> &lt;&lt; Back to Category</a>
            </div> -->
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="mainImage" alt="" />
                </div>
                <div
                  class="product-thumbs"
                  tabindex="1"
                  style="overflow: hidden; outline: none"
                >
                  <div class="product-thumbs-track">
                    <div
                      v-for="(image, index) of trueImages"
                      :key="index"
                      :class="`pt ${index == 0 ? 'active' : ''}`"
                    >
                      <img :src="image.url" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 product-details">
                <h1 class="p-title">{{ product.name }}</h1>
                <h3 v-if="product.sell_price" class="p-price">
                  $ {{ product.sell_price }}
                </h3>
                <h4 class="p-stock">
                  Available:
                  <span :class="`text-${stock_info.class}`">
                    {{ stock_info.text }}
                  </span>
                </h4>
                <!-- <div class="p-rating">
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o fa-fade"></i>
                </div>
                <div class="p-review">
                  <a href="">3 reviews</a>|<a href="">Add your review</a>
                </div> -->
                <!-- <div class="fw-size-choose">
                  <p>Size</p>
                  <div class="sc-item">
                    <input type="radio" name="sc" id="xs-size" />
                    <label for="xs-size">32</label>
                  </div>
                  <div class="sc-item">
                    <input type="radio" id="s-size" name="sc" />
                    <label for="s-size">34</label>
                  </div>
                  <div class="sc-item">
                    <input type="radio" name="sc" id="m-size" checked />
                    <label for="m-size">36</label>
                  </div>
                  <div class="sc-item">
                    <input type="radio" name="sc" id="l-size" />
                    <label for="l-size">38</label>
                  </div>
                  <div class="sc-item disable">
                    <input type="radio" name="sc" id="xl-size" disabled />
                    <label for="xl-size">40</label>
                  </div>
                  <div class="sc-item">
                    <input type="radio" name="sc" id="xxl-size" />
                    <label for="xxl-size">42</label>
                  </div>
                </div> -->
                <!-- <div class="quantity">
                  <p>Quantity</p>
                  <div class="pro-qty"><input type="text" value="1" /></div>
                </div>
                <a href="#" class="site-btn">COMPRAR AHORA</a> -->
                <div
                  id="accordion"
                  class="accordion accordion-area"
                  role="tablist"
                >
                  <div class="panel">
                    <div class="panel-header">
                      <button
                        v-b-toggle.information-tab
                        class="panel-link active"
                      >
                        información
                      </button>
                    </div>
                    <b-collapse
                      id="information-tab"
                      accordion="product-info"
                      visible
                      appear
                    >
                      <div
                        class="panel-body"
                        v-html="compiled_description"
                      ></div>
                    </b-collapse>
                  </div>
                  <div class="panel">
                    <div class="panel-header">
                      <button v-b-toggle.warranty-tab class="panel-link">
                        Garantia
                      </button>
                    </div>
                    <b-collapse id="warranty-tab" accordion="product-info">
                      <div class="panel-body">
                        <p>Este producto posee garantia</p>
                      </div>
                    </b-collapse>
                  </div>
                  <!-- <div class="panel">
                    <div class="panel-header" id="headingThree">
                      <button
                        class="panel-link"
                        data-toggle="collapse"
                        data-target="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapse3"
                      >
                        shipping & Returns
                      </button>
                    </div>
                    <div
                      id="collapse3"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div class="panel-body">
                        <h4>7 Days Returns</h4>
                        <p>
                          Cash on Delivery Available <br />
                          Home Delivery <span>3 - 4 days</span>
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Proin pharetra tempor so dales. Phasellus sagittis auctor
                          gravida. Integer bibendum sodales arcu id te mpus. Ut
                          consectetur lacus leo, non scelerisque nulla euismod nec.
                        </p>
                      </div>
                    </div>
                  </div> -->
                </div>
                <!-- <div class="social-sharing">
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href=""><i class="fa fa-pinterest"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-youtube"></i></a>
                </div> -->
              </div>
            </div>
          </div>
        </section>
        <!-- <section class="related-product-section">
          <div class="container">
            <div class="section-title">
              <h2>RELATED PRODUCTS</h2>
            </div>

            <client-only>
              <carousel
                class="product-slider"
                :loop="true"
                :nav="true"
                :dots="true"
                :margin="30"
                :responsive="responsiveCarousel"
                :navText="navText"
              >
                <div
                  v-for="related_product of [1, 2, 3, 4, 5, 6]"
                  :key="related_product"
                  class="product-item"
                >
                  <div class="pi-pic">
                    <img src="/images/products/3.jpg" />
                    <div class="pi-links">
                      <a href="#" class="add-card">
                        <i class="flaticon-bag"></i>
                        <span>ADD TO CART</span>
                      </a>
                      <a href="#" class="wishlist-btn">
                        <i class="flaticon-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div class="pi-text">
                    <h6>$35,00</h6>
                    <p>Flamboyant Pink Top</p>
                  </div>
                </div>
              </carousel>
            </client-only>
          </div>
        </section> -->
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
      </template>
      <template v-else>
        <div class="my-5 py-5 d-flex justify-content-center">
          <b-spinner></b-spinner>
        </div>
      </template>
    </template>
    <template v-else>
      <div class="my-5 py-5">
        <h3 class="text-center text-danger mt-5 mb-1">404</h3>
        <h2 class="text-center mb-5">Producto no encontrado</h2>
      </div>
    </template>
  </main>
</template>
<script>
// let carousel
// if (process.client) {
//   carousel = require('vue-owl-carousel')
// }
import axios from 'axios'
const marked = require('marked')
export default {
  // components: {
  //   carousel,
  // },
  data() {
    return {
      loading: true,
      product: {},
      not_found: false,
      images: [{ url: false }, { url: false }, { url: false }, { url: false }],
    }
  },
  computed: {
    mainImage() {
      if (this.images[0].url) {
        return this.images[0].url
      } else {
        return `/images/products/${this.product.sku}.jpg`
      }
    },
    trueImages() {
      return this.images.filter((image) => image.url)
    },
    compiled_description() {
      if (this.product.description) {
        return marked(this.product.description)
      }
      return ''
    },
    navText() {
      return [
        '<i class="flaticon-left-arrow-1"></i>',
        '<i class="flaticon-right-arrow-1"></i>',
      ]
    },
    responsiveCarousel() {
      return {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      }
    },
    stock_info() {
      const info = {
        text: '',
        class: '',
      }
      if (this.product.stock > 0) {
        info.text = 'Disponible'
        info.class = 'success'
      } else {
        info.text = 'Agotado'
        info.class = 'danger'
      }
      return info
    },
  },
  async created() {
    let flag = false
    this.loading = true
    try {
      const data = await this.$axios.$get(
        `/api/inventory/products/${this.$route.params.id}/`
      )
      this.product = data
      flag = true
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          this.not_found = true
        } else {
          alert('Ha ocurrido un error')
        }
      }
    }
    this.loading = false
    if (flag) {
      this.imageExistsChecker()
    }
  },
  methods: {
    imageExistsChecker() {
      this.images.forEach(async (_, index) => {
        try {
          const key = `-${index + 1}`
          const imageKey = `${this.product.sku}${key}.jpg`
          const ImageResponse = await axios.get(`/images/products/${imageKey}`)
          console.log(ImageResponse)
          this.images[index].url = `/images/products/${imageKey}`
        } catch (error) {
          console.log(error)
        }
      })
    },
    goToHome() {
      this.$router.push('/')
    },
  },
}
</script>
