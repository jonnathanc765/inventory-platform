<template>
  <header>
    <nav class="flex-nav">
      <div class="container">
        <div class="grid menu">
          <div class="column-xs-8 column-md-6">
            <p id="highlight">
              <a href="#" @click="goToHome()">Multiviral Tech</a>
            </p>
          </div>
          <div class="column-xs-4 column-md-6">
            <a href="#" class="toggle-nav">
              Menu
              <i class="ion-navicon-round"></i>
            </a>
            <ul>
              <li class="nav-item">
                <a href="#" @click="goToHome()">Productos</a>
              </li>
              <!-- <li class="nav-item"><a href="#">About</a></li>
              <li class="nav-item"><a href="#">My Account</a></li>
              <li class="nav-item"><a href="#">Cart (0)</a></li> -->
            </ul>
          </div>
        </div>
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
