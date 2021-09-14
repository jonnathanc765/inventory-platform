<template>
  <section class="product-section">
    <div class="container">
      <!-- <div class="back-link">
        <a href="./category.html"> &lt;&lt; Back to Category</a>
      </div> -->
      <div class="row">
        <div class="col-lg-6">
          <div class="product-pic-zoom">
            <img
              v-if="mainImageNotFound"
              class="product-big-img"
              :src="genericProductImage"
              alt=""
            />
            <img
              v-else
              class="product-big-img"
              :src="mainImage"
              :alt="product.name"
            />
          </div>
          <div
            class="product-thumbs"
            tabindex="1"
            style="overflow: hidden; outline: none"
          >
            <div class="product-thumbs-track">
              <div
                v-for="(image, index) of availableImages"
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
            <span :class="`text-${stockInfo.class}`">
              {{ stockInfo.text }}
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
          <div id="accordion" class="accordion accordion-area" role="tablist">
            <div class="panel">
              <div class="panel-header">
                <button v-b-toggle.information-tab class="panel-link active">
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
</template>

<script>
import axios from 'axios'
const marked = require('marked')

export default {
  props: {
    product: {
      type: Object,
      required: true,
      currentSku: '',
    },
  },
  data() {
    return {
      images: [{ url: false }, { url: false }, { url: false }, { url: false }],
      mainImageNotFound: true,
    }
  },
  computed: {
    genericProductImage() {
      return '/images/generic-product.jpg'
    },
    mainImage() {
      if (this.images[0].url) {
        return this.images[0].url
      } else {
        return `/images/products/${this.product.sku}.jpg`
      }
    },
    availableImages() {
      return this.images.filter((image) => image.url)
    },
    compiled_description() {
      if (this.product.description) {
        return marked(this.product.description)
      }
      return ''
    },
    stockInfo() {
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
  watch: {
    product: {
      immediate: true,
      deep: true,
      handler(_, newValue) {
        if (newValue && newValue.sku && newValue.sku !== this.currentSku) {
          this.imageExistsChecker()
          this.currentSku = newValue.sku
        }
      },
    },
  },
  methods: {
    imageExistsChecker() {
      this.images.forEach(async (_, index) => {
        try {
          let key = `-${index + 1}`
          if (index === 0) {
            key = ''
          }
          const imageKey = `${this.product.sku}${key}.jpg`
          await axios.get(`/images/products/${imageKey}`)
          if (index === 0) {
            this.mainImageNotFound = false
          }
          this.images[index].url = `/images/products/${imageKey}`
        } catch (error) {
          this.images[index].url = false
          if (index === 0) {
            this.mainImageNotFound = true
          }
        }
      })
    },
  },
}
</script>
