<template>
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
              <div>
                <p>{{ producto.prod_count }}</p>
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
        <div>
          <h5>Resumen de compras</h5>
        </div>
        <div>
          <h5>Subtotal : {{ total.subTotal }}</h5>
        </div>
        <div>
          <h5>Total: {{ total.total }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CarritoCompras',
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
