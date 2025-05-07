<template>
  <div class="banner">
    <div class="banner__slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" class="banner__slide">
        <nuxt-link to="/productos">
          <img :src="image" alt="Banner" class="img-banner" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarrucelHome',
  data () {
    return {
      images: [
        'https://images.ctfassets.net/rhgb4uz1u34u/ouAyK7vpLRlq8bZt4tKHG/4db0335c5471722646714bc67a76a069/slider-doh-0505-moda-desktop-a.webp',
        'https://plazavea.vteximg.com.br/arquivos/HP-BANNER-PRINCIPAL-NF-D-07-MAY-2025-D.webp?v=638822288508770000'
      ],
      currentIndex: 0,
      interval: null
    }
  },
  computed: {
    currentImage () {
      return this.images[this.currentIndex]
    }
  },
  mounted () {
    this.startCarousel()
  },
  destroyed () {
    clearInterval(this.interval)
  },
  methods: {
    startCarousel () {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length
      }, 3000)
    }
  }
}
</script>
