<template>
  <div v-if="visible" class="popup-overlay">
    <div class="popup-content">
      <button class="close" @click="$emit('close')">
        ✖
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommonPopUp',

  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {

    }
  }
}
</script>
