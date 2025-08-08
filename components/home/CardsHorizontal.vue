<template>
  <div>
    <!-- <h1 class="mb-4">Ofertas</h1> -->

    <!-- <div class="card-slider d-flex overflow-auto">
      <div
        class="product-card flex-shrink-0"
        v-for="(item, index) in listProducts"
        :key="index"
      >
        <div class="d-flex h-100">
          <div class="w-50">
            <img
              :src="item.prod_imageUrl"
              alt="imagen"
              class="img-fluid h-80 w-80 object-fit-cover"
            >
          </div>
          <div class="w-50 p-3 campo-text">
            <div class="top">
              <h5 class="mb-2" style="font-size: 12px;">{{ item.prod_name }}</h5>
              <p class="mb-1 text-muted">{{ item.prod_description }}</p>
              <strong>${{ item.prod_price - item.prod_price*(item.prod_ofert/100) }}</strong>
            </div>
            <div class="bottom">
              <b-button variant="success" style="font-size: 12px;">Detalles</b-button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
   <section>
  <h2 class="mb-4">Ofertas</h2>
  <client-only>
    <carousel
      :rewind="false"
      :items="3"
      :margin="20"
      :nav="false"
      :dots="false"
      :responsive="{
        0: { items: 1, nav: false, stagePadding: 50 },
        768: { items: 2, nav: false },
        992: { items: 3, nav: false }
      }"
    >
      <nuxt-link
        v-for="(item, index) in listProducts"
        :key="index"
        :to="'/productos/' + item.prod_id"
        class="product-card flex-shrink-0"
      >
        <div class="d-flex h-100">
          <div class="w-50">
            <img
              :src="item.prod_imageUrl"
              alt="imagen"
              class="img-fluid h-80 w-80 object-fit-cover"
            />
          </div>
          <div class="w-50 p-3 campo-text">
            <div class="top">
              <h5 class="mb-2" style="font-size: 12px;">
                {{ item.prod_name }}
              </h5>
              <strong>
                ${{ item.prod_price - item.prod_price * (item.prod_ofert / 100) }}
              </strong>
            </div>
            <div class="bottom">
              <b-button variant="success" style="font-size: 12px;">Detalles</b-button>
            </div>
          </div>
        </div>
      </nuxt-link>
    </carousel>
  </client-only>
</section>

  </div>
</template>

<script>
import { mapState } from 'vuex'
const carousel = () =>
  typeof window !== 'undefined' ? import('v-owl-carousel') : null

export default {
  name: 'CardsHorizontal',
  components: {
    carousel
  },
  computed: {
    ...mapState('products', ['listProducts']),
    ...mapState('home', ['listCategories'])
  },
  async created () {
    try {
      await this.$store.dispatch('products/loadProductsByOfert')
      console.log('Aqui estan los datos: ', this.listProducts)
    } catch (error) {
      console.error('Error loading data:', error)
    }
  }
}
</script>

<style scoped lang="scss">
.card-slider {
  gap: 1rem;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

/* Card base */
.product-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  scroll-snap-align: start;
  height: 200px;
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(25% - 1rem); // 4 en desktop
}

/* 2 en tablet */
@media (max-width: 992px) {
  .product-card {
    flex: 0 0 calc(50% - 1rem);
  }
}

/* 1 en mobile */
@media (max-width: 576px) {
  .product-card {
    flex: 0 0 100%;
  }
}

.object-fit-cover {
  object-fit: cover;
}

.campo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 10px;
  }

  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 10px;
  }
}
</style>
