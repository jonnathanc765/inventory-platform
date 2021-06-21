<template>
  <main>
    <section class="hero-section">
      <client-only>
        <carousel
          class="hero-slider"
          :loop="true"
          :margin="0"
          :nav="false"
          :items="1"
          :dots="false"
          animateOut="fadeOut"
          animateIn="fadeIn"
          :navText="heroNavText"
          :smartSpeed="1200"
          :autoHeight="false"
          :autoplay="true"
          @changed="heroInitialized"
        >
          <div id="hero-1" class="hs-item" data-setbg="#">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-7 text-white">
                  <span>New Arrivals</span>
                  <h2>denim jackets</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <a href="#" class="site-btn sb-line">DISCOVER</a>
                  <a href="#" class="site-btn sb-white">ADD TO CART</a>
                </div>
              </div>
              <div class="offer-card text-white">
                <span>from</span>
                <h2>$29</h2>
                <p>SHOP NOW</p>
              </div>
            </div>
          </div>
          <div id="hero-2" class="hs-item set-bg" data-setbg="#">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-7 text-white">
                  <span>New Arrivals</span>
                  <h2>denim jackets</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <a href="#" class="site-btn sb-line">DISCOVER</a>
                  <a href="#" class="site-btn sb-white">ADD TO CART</a>
                </div>
              </div>
              <div class="offer-card text-white">
                <span>from</span>
                <h2>$29</h2>
                <p>SHOP NOW</p>
              </div>
            </div>
          </div>
        </carousel>
      </client-only>
      <div class="container">
        <div class="slide-num-holder" id="snh-1"></div>
      </div>
    </section>
    <section class="features-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 p-0 feature">
            <div class="feature-inner">
              <div class="feature-icon">
                <img src="~assets/img/icons/1.png" alt="#" />
              </div>
              <h2>Responsabilidad</h2>
            </div>
          </div>
          <div class="col-md-4 p-0 feature">
            <div class="feature-inner">
              <div class="feature-icon">
                <img src="~assets/img/icons/2.png" alt="#" />
              </div>
              <h2>Productos originales</h2>
            </div>
          </div>
          <div class="col-md-4 p-0 feature">
            <div class="feature-inner">
              <div class="feature-icon">
                <img src="~assets/img/icons/3.png" alt="#" />
              </div>
              <h2>Envios rápidos & gratis</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="top-letest-product-section">
      <div class="container">
        <div class="section-title">
          <h2>LO MAS NUEVO</h2>
        </div>
        <client-only>
          <carousel
            class="product-slider"
            :loop="true"
            :nav="true"
            :dots="false"
            :margin="30"
            :autoPlay="true"
            :navText="navText"
            :responsive="responsive_config"
          >
            <div class="product-item">
              <div class="pi-pic">
                <img src="~assets/img/product/1.jpg" alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag"></i><span>ADD TO CART</span>
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
            <div class="product-item">
              <div class="pi-pic">
                <div class="tag-new">New</div>
                <img src="~assets/img/product/2.jpg" alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag"></i><span>ADD TO CART</span>
                  </a>
                  <a href="#" class="wishlist-btn">
                    <i class="flaticon-heart"></i>
                  </a>
                </div>
              </div>
              <div class="pi-text">
                <h6>$35,00</h6>
                <p>Black and White Stripes Dress</p>
              </div>
            </div>
            <div class="product-item">
              <div class="pi-pic">
                <img src="~assets/img/product/3.jpg" alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag"></i><span>ADD TO CART</span>
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
            <div class="product-item">
              <div class="pi-pic">
                <img src="~assets/img/product/4.jpg" alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag"></i><span>ADD TO CART</span>
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
            <div class="product-item">
              <div class="pi-pic">
                <img src="~assets/img/product/5.jpg" alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag"></i><span>ADD TO CART</span>
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
        <div class="product-slider owl-carousel"></div>
      </div>
    </section>
    <section class="product-filter-section">
      <div class="container">
        <div class="section-title">
          <h2>DESCUBRE LOS PRODUCTOS MAS VENDIDOS</h2>
        </div>
        <!-- <ul class="product-filter-menu">
          <li><a href="#">TOPS</a></li>
          <li><a href="#">JUMPSUITS</a></li>
          <li><a href="#">LINGERIE</a></li>
          <li><a href="#">JEANS</a></li>
          <li><a href="#">DRESSES</a></li>
          <li><a href="#">COATS</a></li>
          <li><a href="#">JUMPERS</a></li>
          <li><a href="#">LEGGINGS</a></li>
        </ul> -->
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src="~assets/img/product/5.jpg" alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag"></i><span>ADD TO CART</span>
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
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <div class="tag-sale">ON SALE</div>
                <img src="~assets/img/product/5.jpg" alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag"></i><span>ADD TO CART</span>
                  </a>
                  <a href="#" class="wishlist-btn">
                    <i class="flaticon-heart"></i>
                  </a>
                </div>
              </div>
              <div class="pi-text">
                <h6>$35,00</h6>
                <p>Black and White Stripes Dress</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src="~assets/img/product/7.jpg" alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag"></i><span>ADD TO CART</span>
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
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src="~assets/img/product/8.jpg" alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag"></i><span>ADD TO CART</span>
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
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src="~assets/img/product/9.jpg" alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag"></i><span>ADD TO CART</span>
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
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src="~assets/img/product/10.jpg" alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag"></i><span>ADD TO CART</span>
                  </a>
                  <a href="#" class="wishlist-btn">
                    <i class="flaticon-heart"></i>
                  </a>
                </div>
              </div>
              <div class="pi-text">
                <h6>$35,00</h6>
                <p>Black and White Stripes Dress</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src="~assets/img/product/11.jpg" alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag"></i><span>ADD TO CART</span>
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
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <img src="~assets/img/product/12.jpg" alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag"></i><span>ADD TO CART</span>
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
          </div>
        </div>
        <div class="text-center pt-5">
          <button class="site-btn sb-line sb-dark">LOAD MORE</button>
        </div>
      </div>
    </section>
    <section class="banner-section">
      <div class="container">
        <div class="banner" id="final-banner">
          <div class="tag-new">NEW</div>
          <span>Lo recién llegado</span>
          <h2>Wifi 6</h2>
          <a href="#" class="site-btn">Explorar</a>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import axios from 'axios'
let carousel
if (process.client) {
  carousel = require('vue-owl-carousel')
}
export default {
  name: 'Home',
  data() {
    return {
      products: [],
      loading: true,
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
  components: {
    carousel,
  },
  computed: {
    responsive_config() {
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
    navText() {
      return [
        '<i class="flaticon-left-arrow-1"></i>',
        '<i class="flaticon-right-arrow-1"></i>',
      ]
    },
    heroNavText() {
      return [
        '<i class="flaticon-left-arrow-1"></i>',
        '<i class="flaticon-right-arrow-1"></i>',
      ]
    },
  },
  methods: {
    goToProduct(id) {
      this.$router.push(`/products/${id}`)
    },
    heroInitialized(event) {
      console.log('event: ', event)
      // let a = this.items().length;
      // $("#snh-1").html("<span>1</span><span>" + a + "</span>");
    },
  },
}
</script>
