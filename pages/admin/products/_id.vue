<template>
  <section>
    <div class="row justify-content-center mt-5">
      <div class="col-md-5">
        <h3 class="my-2">Registrar nuevo producto</h3>
        <form @submit="onSubmit">
          <div class="form-group">
            <label for="sku">SKU</label>
            <input
              id="sku"
              v-model="form.sku"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="description">Descripción</label>
            <input
              id="description"
              v-model="form.description"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="cost_price">Precio de costo</label>
            <input
              id="cost_price"
              v-model="form.cost_price"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="sell_price">Precio de venta</label>
            <input
              id="sell_price"
              v-model="form.sell_price"
              type="text"
              class="form-control"
            />
          </div>
          <b-button variant="primary">Guardar</b-button>
          <NuxtLink class="btn btn-secondary" to="/admin/products">
            Volver
          </NuxtLink>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      form: {
        sku: '',
        name: '',
        description: '',
        cost_price: '',
        sell_price: '',
        stock: '',
      },
    }
  },
}
</script>
