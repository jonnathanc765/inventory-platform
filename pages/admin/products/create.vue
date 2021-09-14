<template>
  <section>
    <div class="row my-5">
      <div class="col-md-9 border border-secondary">
        <h4 class="mt-4">Previsualización del producto</h4>
        <hr />
        <SingleProductTemplate :product="product" />
      </div>
      <div class="col-md-3">
        <h3 class="my-2">Registrar nuevo producto</h3>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="sku">SKU</label>
            <input
              id="sku"
              v-model="product.sku"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': $v.product.sku.$error || errors.sku }"
            />
            <div v-if="!$v.product.sku.maxLength" class="invalid-feedback">
              Solo debe tener un máximo de 255 caracteres
            </div>
            <div v-if="errors.sku" class="invalid-feedback">
              {{ errors.sku[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input
              id="name"
              v-model="$v.product.name.$model"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': $v.product.name.$error || errors.name }"
            />
            <div v-if="!$v.product.name.required" class="invalid-feedback">
              El nombre es requerido
            </div>
            <div v-if="!$v.product.name.minLength" class="invalid-feedback">
              El nombre debe tener un minimo de 3 caracteres
            </div>
            <div v-if="!$v.product.name.maxLength" class="invalid-feedback">
              El nombre debe tener un minimo de 255 caracteres
            </div>
            <div v-if="errors.name" class="invalid-feedback">
              {{ errors.name[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="name">Stock</label>
            <input
              id="stock"
              v-model="$v.product.stock.$model"
              type="number"
              class="form-control"
              :class="{ 'is-invalid': $v.product.stock.$error || errors.stock }"
            />
            <small class="text-muted">
              Puede dejar el stock vacio, y por defecto sera colocado como "0"
            </small>
            <div v-if="!$v.product.stock.integer" class="invalid-feedback">
              El stock debe ser un numero entero
            </div>
            <div v-if="errors.stock" class="invalid-feedback">
              {{ errors.stock[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="description">Descripción</label>
            <textarea
              id="description"
              v-model="$v.product.description.$model"
              class="form-control"
              :class="{
                'is-invalid':
                  $v.product.description.$error || errors.description,
              }"
            ></textarea>
            <div
              v-if="!$v.product.description.maxLength"
              class="invalid-feedback"
            >
              La descripción debe tener un máximo de 1000 caracteres
            </div>
            <div v-if="errors.description" class="invalid-feedback">
              {{ errors.description[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="cost_price">Precio de costo</label>
            <input
              id="cost_price"
              v-model="$v.product.cost_price.$model"
              type="text"
              class="form-control"
              :class="{
                'is-invalid': $v.product.cost_price.$error || errors.cost_price,
              }"
            />
            <div v-if="!$v.product.cost_price.decimal" class="invalid-feedback">
              EL precio de costo debe ser un número
            </div>
            <div
              v-if="!$v.product.cost_price.required"
              class="invalid-feedback"
            >
              El precio de costo es requerido
            </div>
            <div v-if="errors.cost_price" class="invalid-feedback">
              {{ errors.cost_price[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="sell_price">Precio de venta</label>
            <input
              id="sell_price"
              v-model="$v.product.sell_price.$model"
              type="text"
              class="form-control"
              :class="{
                'is-invalid': $v.product.sell_price.$error || errors.sell_price,
              }"
            />
            <div v-if="!$v.product.sell_price.decimal" class="invalid-feedback">
              El precio de venta es debe ser un número
            </div>
            <div v-if="errors.sell_price" class="invalid-feedback">
              {{ errors.sell_price[0] }}
            </div>
          </div>
          <b-button variant="primary" type="submit">Guardar</b-button>
          <NuxtLink class="btn btn-secondary" to="/admin/products">
            Volver
          </NuxtLink>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  minLength,
  maxLength,
  integer,
  decimal,
} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      product: {
        sku: '',
        name: '',
        description: '',
        cost_price: '',
        sell_price: '',
        stock: '',
      },
      errors: {},
      loading: false,
    }
  },
  methods: {
    async onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.loading = true
      try {
        await this.$axios.$post(`/api/inventory/products/`, this.product)
        this.$router.push('/admin/products')
      } catch (error) {
        if (error.response) {
          this.errors = error.response.data
        } else {
          console.log(error)
        }
      }
    },
  },
  validations: {
    product: {
      sku: {
        maxLength: maxLength(255),
      },
      name: {
        maxLength: maxLength(255),
        minLength: minLength(3),
        required,
      },
      description: {
        maxLength: maxLength(1000),
      },
      stock: {
        integer,
      },
      cost_price: {
        required,
        decimal,
      },
      sell_price: {
        decimal,
      },
    },
  },
}
</script>
