<template>
  <div>
    <!-- <div class="banner__slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" :class="['banner__slide', { active: currentIndex === index }]">
        <nuxt-link to="/productos">
          <img :src="image" alt="Banner" class="img-banner" />
        </nuxt-link>
      </div>
    </div> -->
    <div>
      <b-carousel
        v-model="slide"
        :interval="4000"
        controls
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <div v-for="(banner) in banners" :key="banner.bnn_id">
          <b-carousel-slide>
            <template #img>
              <template>
                <img
                  class="d-none d-md-block"
                  width="100%"
                  :src="banner.bnn_image_url_desktop"
                  alt="imagen de desktop"
                >
                <img
                  class="d-block d-md-none"
                  width="100%"
                  :src="banner.bnn_image_url_mobile"
                  alt=""
                >
              </template>
            </template>
          </b-carousel-slide>
        </div>
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
      currentIndex: 0,
      interval: null,
      slide: 0,
      sliding: null
    }
  },
  computed: {
    currentImage () {
      return this.images[this.currentIndex]
    },
    ...mapState('home', {
      banners: 'banners'
    })
  },
  created () {
    this.$store.dispatch('home/loadBanners')
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
