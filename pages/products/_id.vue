<template>
  <main>
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
                <img
                  class="product-big-img"
                  :src="`/images/products/${product.id}.jpg`"
                  alt=""
                />
              </div>
              <div
                class="product-thumbs"
                tabindex="1"
                style="overflow: hidden; outline: none"
              >
                <!-- <div class="product-thumbs-track">
                  <div
                    class="pt active"
                    data-imgbigurl="img/single-product/1.jpg"
                  >
                    <img
                      src="data:image/webp;base64,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"
                      alt=""
                    />
                  </div>
                  <div class="pt" data-imgbigurl="img/single-product/2.jpg">
                    <img
                      src="data:image/webp;base64,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"
                      alt=""
                    />
                  </div>
                  <div class="pt" data-imgbigurl="img/single-product/3.jpg">
                    <img
                      src="data:image/webp;base64,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"
                      alt=""
                    />
                  </div>
                </div> -->
              </div>
            </div>
            <div class="col-lg-6 product-details">
              <h2 class="p-title">{{ product.name }}</h2>
              <h3 class="p-price">$ {{ product.sell_price }}</h3>
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
                    <div class="panel-body" v-html="compiled_description"></div>
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
                      <p>El vendedor no ofrece garantia</p>
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
  </main>
</template>
<script>
import axios from 'axios'
// let carousel
// if (process.client) {
//   carousel = require('vue-owl-carousel')
// }
const marked = require('marked')
export default {
  // components: {
  //   carousel,
  // },
  data() {
    return {
      loading: true,
      product: {},
    }
  },
  computed: {
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
  async mounted() {
    this.loading = true
    try {
      const { data } = await axios.get(
        `https://inventory-django.herokuapp.com/api/inventory/products/${this.$route.params.id}/`
      )
      this.product = data
    } catch (error) {
      alert('Ha ocurrido un error')
    }
    this.loading = false
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
  },
}
</script>
