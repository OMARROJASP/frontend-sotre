// plugins/vue-slider.js
import Vue from 'vue'

if (process.client) {
  const VueSlider = require('vue-slider-component')
  require('vue-slider-component/theme/default.css')
  Vue.component('VueSlider', VueSlider.default || VueSlider)
}
