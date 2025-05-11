<template>
  <div class="banner">
    <div class="banner__slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" :class="['banner__slide', { active: currentIndex === index }]">
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
        'https://i.pinimg.com/736x/86/f4/63/86f463995f71aa9c87dd934ca927ef24.jpg',
        'https://i.pinimg.com/736x/fe/59/97/fe5997fd5db229a56013ebaab404f5fd.jpg'
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
