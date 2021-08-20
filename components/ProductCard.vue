<template>
  <div class="product-item">
    <div
      class="pi-pic cursor-pointer"
      @click="$router.push(`/products/${product.id}`)"
    >
      <img :src="`/images/products/${product.id}.jpg`" alt="" />
      <div class="pi-links">
        <NuxtLink :to="`/products/${product.id}`" class="add-card">
          <i class="flaticon-bag"></i><span>Detalles</span>
        </NuxtLink>
        <!-- <a href="#" class="wishlist-btn">
          <i class="flaticon-heart"></i>
        </a> -->
      </div>
    </div>
    <div class="pi-text">
      <h6>${{ product.sell_price }}</h6>
      <p>{{ product.name | small_truncate }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
}
</script>
<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
