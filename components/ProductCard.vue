<template>
  <div class="product-item">
    <div class="pi-pic">
      <img :src="`/images/products/${product.id}.jpg`" alt="" />
      <div class="pi-links">
        <a href="#" class="add-card">
          <i class="flaticon-bag"></i><span>Detalles.</span>
        </a>
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
