<template>
  <div>
    <CommonHeader />
    <div id="page-carrito">
      <p class="title-principal">
        Mi Carritito (2)
      </p>
      <div class="container">
        <div class="list-buy">
          <!-- Name Store-->
          <div>Rukanas Store</div>
          <!-- Encabezado de la tabla -->
          <div class="list-buy__head">
            <div>
              <p>Id</p>
            </div>
            <div>
              <p>Producto</p>
            </div>
            <div>
              <p>Cantidad</p>
            </div>
            <div>
              <p>SubTotal</p>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <!-- Body de la tabla-->
          <div class="list-buy__body">
            <div>
              <div v-for="producto in productos" :key="producto.prod_id" class="data-product">
                <div>
                  <p>{{ producto.prod_id }}</p>
                </div>
                <div>
                  <p>{{ producto.prod_name }}</p>
                </div>
                <div class="data-product__count">
                  <button>
                    <font-awesome-icon :icon="['fas','minus']" size="2xs" style="color: #fff;" />
                  </button>
                  <p>{{ producto.prod_count }}</p>
                  <button>
                    <font-awesome-icon :icon="['fas','plus']" size="2xs" style="color: #fff;" />
                  </button>
                </div>
                <div>
                  <p>{{ producto.prod_subtotal }}</p>
                </div>
                <div>
                  <p>Eliminar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Resumen de la compra -->
        <div class="summary-buy">
          <div class="summary-buy__title">
            <h5>Resumen de compras</h5>
          </div>
          <div class="summary-buy__sub-total">
            <div>
              oferta
            </div>
            <div>
              {{ total.subTotal }}
            </div>
          </div><div class="summary-buy__sub-total">
            <div>
              subtotal
            </div>
            <div>
              {{ total.subTotal }}
            </div>
          </div>
          <div class="summary-buy__total">
            <div>
              total
            </div>
            <div>
              {{ total.total }}
            </div>
          </div>
          <div class="summary-buy__buy">
            <button>
              Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from '~/components/common/CommonHeader.vue'

export default {
  name: 'CarritoCompras',
  components: {
    CommonHeader
  },
  data () {
    return {
      countProducts: 0,
      productos: [
        {
          prod_id: 1,
          prod_name: 'zapatillas Adidas',
          prod_count: 2,
          prod_subtotal: 120.0
        },
        {
          prod_id: 2,
          prod_name: 'zapatillas Adidas 2',
          prod_count: 1,
          prod_subtotal: 30.0
        },
        {
          prod_id: 3,
          prod_name: 'zapatillas Adidas 3',
          prod_count: 1,
          prod_subtotal: 29.90
        }
      ],
      total: {
        subTotal: 250.00,
        total: 250.00
      }
    }
  }

}
</script>
