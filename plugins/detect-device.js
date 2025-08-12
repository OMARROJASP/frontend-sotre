export default ({ app }, inject) => {
  const state = {
    width: process.client ? window.innerWidth : 0
  }

  if (process.client) {
    window.addEventListener('resize', () => {
      state.width = window.innerWidth
    })
  }

  inject('device', {
    isMobile: () => state.width <= 768,
    isDesktop: () => state.width > 768,
    getWidth: () => state.width
  })
}
