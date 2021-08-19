<template>
  <header class="header-section">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 text-center text-lg-left">
            <!-- logo -->
            <a href="#" class="site-logo">
              <h2>Multiviral</h2>
            </a>
          </div>
          <div class="col-xl-6 col-lg-5">
            <form class="header-search-form">
              <input type="text" placeholder="Busca tus productos ...." />
              <button><i class="flaticon-search"></i></button>
            </form>
          </div>
          <div class="col-xl-4 col-lg-5 d-flex align-items-center">
            <div class="user-panel">
              <div class="up-item">
                <i class="flaticon-profile"></i>
                <!-- <a href="#"></a> -->
                <NuxtLink to="/auth/login">Sign In</NuxtLink>
                <!-- or <a href="#">Create Account</a> -->
              </div>
              <!-- <div class="up-item">
                <div class="shopping-card">
                  <i class="flaticon-bag"></i>
                  <span>0</span>
                </div>
                <a href="#">Shopping Cart</a>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="main-navbar">
      <div class="container">
        <ul class="main-menu">
          <li>
            <NuxtLink to="/">Inicio</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/categories">Explorar</NuxtLink>
          </li>
          <!-- <li><a href="#">Men</a></li>
          <li>
            <a href="#">
              Jewelry
              <span class="new">New</span>
            </a>
          </li>
          <li>
            <a href="#">Shoes</a>
            <ul class="sub-menu">
              <li><a href="#">Sneakers</a></li>
              <li><a href="#">Sandals</a></li>
              <li><a href="#">Formal Shoes</a></li>
              <li><a href="#">Boots</a></li>
              <li><a href="#">Flip Flops</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul class="sub-menu">
              <li><a href="./product.html">Product Page</a></li>
              <li><a href="./category.html">Category Page</a></li>
              <li><a href="./cart.html">Cart Page</a></li>
              <li><a href="./checkout.html">Checkout Page</a></li>
              <li><a href="./contact.html">Contact Page</a></li>
            </ul>
          </li>
          <li><a href="#">Blog</a></li> -->
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/')
    },
  },
}
</script>
