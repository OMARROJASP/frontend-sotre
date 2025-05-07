<template>
  <div>
    <h2>Ofertas</h2>
    <div class="carrucel">
      <button class="arrow left" @click="prevSlide">‹</button>
      <div class="carrucel__slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(producto, index) in productos" :key="index" class="carrucel__slide">
          <nuxt-link class="orden--product" :to="'/productos/' + producto.prod_id">
            <div class="text">
              <h3>{{ producto.prod_name }}</h3>
              <p class="price">
                s/ {{ producto.prod_price }}
              </p>
            </div>
            <div class="img">
              <img :src="producto.prod_imagenUrl" alt="Producto" class="img-carrucel" />
            </div>
          </nuxt-link>
        </div>
        <button class="arrow right" @click="nextSlide">›</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarrucelOferta',
  data () {
    return {
      productos: [
        {
          prod_id: 1,
          prod_name: 'Camiseta Deportiva',
          // eslint-disable-next-line quotes
          prod_description: "Camiseta de poliéster transpirable, ideal para entrenamiento.",
          prod_price: 29.99,
          prod_stock: 120,
          prod_category: 'Ropa Deportiva',
          prod_imagenUrl: 'https://oechsle.vteximg.com.br/arquivos/ids/21035253-1000-1000/2765717_1.jpg?v=638811347334830000',
          prod_supplier: 'DeportesX'
        },
        {
          prod_id: 2,
          prod_name: 'Auriculares Inalámbricos',
          prod_description: 'Auriculares Bluetooth con cancelación de ruido.',
          prod_price: 89.99,
          prod_stock: 45,
          prod_category: 'Electrónica',
          prod_imagenUrl: 'https://oechsle.vteximg.com.br/arquivos/ids/20764445-1000-1000/2749604.jpg?v=638780561134030000',
          prod_supplier: 'TecnoPlus'
        },
        {
          prod_id: 3,
          prod_name: 'Auriculares Inalámbricos',
          prod_description: 'Auriculares Bluetooth con cancelación de ruido.',
          prod_price: 89.99,
          prod_stock: 45,
          prod_category: 'Electrónica',
          prod_imagenUrl: 'https://oechsle.vteximg.com.br/arquivos/ids/20764445-1000-1000/2749604.jpg?v=638780561134030000',
          prod_supplier: 'TecnoPlus'
        },
        {
          prod_id: 4,
          prod_name: 'Auriculares Inalámbricos',
          prod_description: 'Auriculares Bluetooth con cancelación de ruido.',
          prod_price: 89.99,
          prod_stock: 45,
          prod_category: 'Electrónica',
          prod_imagenUrl: 'https://oechsle.vteximg.com.br/arquivos/ids/20764445-1000-1000/2749604.jpg?v=638780561134030000',
          prod_supplier: 'TecnoPlus'
        },
        {
          prod_id: 5,
          prod_name: 'Auriculares Inalámbricos',
          prod_description: 'Auriculares Bluetooth con cancelación de ruido.',
          prod_price: 89.99,
          prod_stock: 45,
          prod_category: 'Electrónica',
          prod_imagenUrl: 'data:image/jpeg;base64,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',
          prod_supplier: 'TecnoPlus'
        },
        {
          prod_id: 6,
          prod_name: 'Auriculares Inalámbricos',
          prod_description: 'Auriculares Bluetooth con cancelación de ruido.',
          prod_price: 89.99,
          prod_stock: 45,
          prod_category: 'Electrónica',
          prod_imagenUrl: 'https://oechsle.vteximg.com.br/arquivos/ids/20764445-1000-1000/2749604.jpg?v=638780561134030000',
          prod_supplier: 'TecnoPlus'
        },
        {
          prod_id: 7,
          prod_name: 'Auriculares Inalámbricos',
          prod_description: 'Auriculares Bluetooth con cancelación de ruido.',
          prod_price: 89.99,
          prod_stock: 45,
          prod_category: 'Electrónica',
          prod_imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAe6AjsE4vmmEiy03ZLoV7RJPxQ1P381s6Jg&s',
          prod_supplier: 'TecnoPlus'
        },
        {
          prod_id: 8,
          prod_name: 'Auriculares Inalámbricos',
          prod_description: 'Auriculares Bluetooth con cancelación de ruido.',
          prod_price: 89.99,
          prod_stock: 45,
          prod_category: 'Electrónica',
          prod_imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRC4LM9lQSNr9olWg0qk7LPhtX2KXaLnRHUA&s',
          prod_supplier: 'TecnoPlus'
        },
        {
          prod_id: 9,
          prod_name: 'Auriculares Inalámbricos',
          prod_description: 'Auriculares Bluetooth con cancelación de ruido.',
          prod_price: 89.99,
          prod_stock: 45,
          prod_category: 'Electrónica',
          prod_imagenUrl: 'data:image/jpeg;base64,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',
          prod_supplier: 'TecnoPlus'
        },
        {
          prod_id: 10,
          prod_name: 'Auriculares Inalámbricos',
          prod_description: 'Auriculares Bluetooth con cancelación de ruido.',
          prod_price: 89.99,
          prod_stock: 45,
          prod_category: 'Electrónica',
          prod_imagenUrl: 'https://oechsle.vteximg.com.br/arquivos/ids/20764445-1000-1000/2749604.jpg?v=638780561134030000',
          prod_supplier: 'TecnoPlus'
        }
      ],
      currentIndex: 0,
      autoSlide: null
    }
  },
  computed: {
    groupedProducts () {
      // Agrupa de 4 en 4
      const size = 4
      const result = []
      for (let i = 0; i < this.productos.length; i += size) {
        result.push(this.productos.slice(i, i + size))
      }
      return result
    },
    totalSlides () {
      return this.groupedProducts.length
    }
  },
  mounted () {
    this.autoSlide = setInterval(this.nextSlide, 4000)
  },
  beforeDestroy () {
    clearInterval(this.autoSlide)
  },
  methods: {
    nextSlide () {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides
    },
    prevSlide () {
      this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides
    }
  }
}
</script>
