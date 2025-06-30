<template>
  <div class="banner">
    <!-- <div class="banner__slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" :class="['banner__slide', { active: currentIndex === index }]">
        <nuxt-link to="/productos">
          <img :src="image" alt="Banner" class="img-banner" />
        </nuxt-link>
      </div>
    </div> -->
    <div>
      <b-carousel
        id="carusel-1"
        v-model="slide"
        :interval="2000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide v-for="banner in banners" :key="banner.bnn_id" :class="{ 'activo': isActive, 'inactivo': !isActive }" :img-src="banner.bnn_image_url_desktop"></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CarrucelHome',
  data () {
    return {
      images: [
        'https://i.pinimg.com/736x/86/f4/63/86f463995f71aa9c87dd934ca927ef24.jpg',
        'https://i.pinimg.com/736x/fe/59/97/fe5997fd5db229a56013ebaab404f5fd.jpg'
      ],
      currentIndex: 0,
      interval: null,
      slide: 0,
      sliding: null
    }
  },
  fetch () {
    this.$store.dispatch('home/loadBanners')
  },
  computed: {
    currentImage () {
      return this.images[this.currentIndex]
    },
    ...mapState('home', {
      banners: 'banners'
    })
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
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
