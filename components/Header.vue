<template>
  <div class="container">
    <header
      class="
        d-flex
        flex-wrap
        justify-content-center
        py-3
        border-bottom
        align-items-center
      "
    >
      <a
        @click="goToHome()"
        class="
          d-flex
          align-items-center
          mb-md-0
          me-md-auto
          text-dark text-decoration-none
          margin-r-2
        "
      >
        <img src="/images/logo.png" alt="" class="logo-styles" />
        <span class="fs-4">Multiviral Tech</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">Inicio</a>
        </li>
      </ul>
    </header>
  </div>
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
