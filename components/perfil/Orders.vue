<template>
  <div>
    <div id="mis-pedidos-perfil">
      <h1 class="title">Mis pedidos</h1>
      <section>
        <div v-for="pedido in pedidos" :key="pedido.ord_id" class="pedidos">
          <div class="pedidos__datos">
            <div class="pedidos__datos__status">
              <span style="padding: 5px 10px;">Estado:</span>
              <div class="contenedor-status">
                <span :class="pedido.ord_status">{{ pedido.ord_status }}</span>
              </div>
            </div>
            <span>Fecha: {{ fechaFormateada(pedido.ord_date) }} - {{ horaFormateada(pedido.ord_date) }}</span>
          </div>
          <div class="pedidos__detalle">
            <button>Ver Detalle</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'OrdersPerfil',
  data () {
    return {
      fechaOriginalx: '2025-08-03T22:41:03.962Z'
    }
  },
  computed: {
    ...mapState('pedidos', {
      pedidos: 'pedidos'
    })
  },
  async created () {
    try {
      await this.$store.dispatch('pedidos/ordersForUser')
    } catch (error) {

    }
  },
  methods: {
    ...mapActions('index', ['logout']),

    fechaFormateada (fecha) {
      return new Date(fecha).toLocaleDateString('es-ES')
    },
    horaFormateada (fecha) {
      return new Date(fecha).toLocaleTimeString('es-ES')
    },
    verDetails () {
      // para poder accecder a la data de orders http://localhost:3001/details/admin/full/9
    }
  }
}
</script>
