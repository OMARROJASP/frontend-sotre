<template>
  <div class="footer">
    <!-- Para Desktop -->
    <div class="footer__sup">
      <!-- Section Logo -->
      <div class="section">
        <div class="section__logo">
          <p class="text-orange">
            Rukanas
            <span class="text-white">
              Store
            </span>
          </p>
        </div>
      </div>
      <!-- Section Enlace de Navegacion-->
      <div class="section__options">
        <div :class="['section__options__title', { 'section__options__title--dark': showOptions === 1 }]" @click="toggleOptions(1)">
          <div class="title">
            Enlace de Navegacion
          </div>
          <div class="icon-plus">
            <font-awesome-icon :icon="['fas', showOptions === 1 ?'minus':'plus']" size="2xs" style="color: #FFD43B;" />
          </div>
        </div>
        <div :class="['section__options__body', { 'section__options__body--visible': showOptions === 1 }]">
          <ul class="list-options">
            <li class="option">
              <nuxt-link to="/productos" class="option__menu-item">
                Productos
              </nuxt-link>
            </li>
            <li class="option">
              <nuxt-link to="/ofertas" class="option__menu-item">
                Ofertas
              </nuxt-link>
            </li>
            <li class="option">
              <nuxt-link to="/nosotros" class="option__menu-item">
                Nosotros
              </nuxt-link>
            </li>
            <li class="option">
              <nuxt-link to="/contactos" class="option__menu-item">
                Contacto
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- Section Contacto -->
      <div class="section__options">
        <div :class="['section__options__title', { 'section__options__title--dark': showOptions === 2 }]" @click="toggleOptions(2)">
          <div class="title">
            Contacto
          </div>
          <div class="icon-plus">
            <font-awesome-icon :icon="['fas', showOptions === 2 ?'minus':'plus']" size="2xs" style="color: #FFD43B;" />
          </div>
        </div>
        <div :class="['section__options__body', { 'section__options__body--visible': showOptions === 2 }]">
          <ul class="list-options">
            <li class="option__contact-item">
              <font-awesome-icon :icon="['fas', 'map-location-dot']" style="color: #ffffff;" class="img" />
              <p class="footer-menu-p">Av. el sol s/n - Lucanas </p>
            </li>
            <li class="option__contact-item">
              <font-awesome-icon :icon="['fas', 'phone']" style="color: #ffffff;" class="img" />
              <p class="footer-menu-p">991117845 </p>
            </li>
            <li class="option__contact-item">
              <font-awesome-icon :icon="['fas', 'envelope']" style="color: #ffffff;" class="img" />
              <p class="footer-menu-p">
                rukanas@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- Section Enlaces Legales -->
      <div class="section__options">
        <div :class="['section__options__title', { 'section__options__title--dark': showOptions === 3 }]" @click="toggleOptions(3)">
          <div class="title">
            Enlace Legales
          </div>
          <div class="icon-plus">
            <font-awesome-icon :icon="['fas', showOptions === 3 ?'minus':'plus']" size="2xs" style="color: #FFD43B;" />
          </div>
        </div>
        <div :class="['section__options__body', { 'section__options__body--visible': showOptions === 3 }]">
          <ul class="list-options">
            <li class="option">
              <p class="option__menu-item">
                Términos y condiciones
              </p>
            </li>
            <li class="option">
              <p class="option__menu-item">
                Politicas de privacidad
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- Section Redes Sociales -->
      <div class="section__options">
        <div :class="['section__options__title', { 'section__options__title--dark': showOptions === 4 }]" @click="toggleOptions(4)">
          <div class="title">
            Siguenos en
          </div>
          <div class="icon-plus">
            <font-awesome-icon :icon="['fas', showOptions === 4 ?'minus':'plus']" size="2xs" style="color: #FFD43B;" />
          </div>
        </div>
        <div :class="['section__options__body', { 'section__options__body--visible': showOptions === 4 }]">
          <ul class="list-options">
            <li class="option">
              <font-awesome-icon :icon="['fab', 'facebook']" style="color: #ffffff;" />
            </li>
            <li class="option">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </li>
            <li class="option">
              <font-awesome-icon :icon="['fab', 'x-twitter']" />
            </li>
            <li class="option">
              <font-awesome-icon :icon="['fab', 'tiktok']" />
            </li>
          </ul>
        </div>
      </div>
      <!-- Section Paga con Tarjetas -->
      <div class="section__options">
        <div class="section__options__title--none">
          <div class="title">
            Medios de Pago
          </div>
        </div>
        <div :class="['section__options__body', { 'section__options__body--visible': true }]">
          <div class="list-options">
            <div class="option">
              <img src="@/assets/img/footer/paga-aqui.png" class="option__pago-item" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Section Inf footer-->
    <div class="footer__inf">
      © 2023 Rukanas Store. Todos los derechos reservados.
    </div>
    <!-- Para Mobile -->
    <!-- <div class="container-footer-sup">
      <div class="footer-logo">
        <p class="text-orange">
          Rukanas
          <span class="text-white">
            Store
          </span>
        </p>
      </div>
      <div class="footer-menu">
        <div class="container-menu-item-title" @click="toggleOptions(1)">
          <div class="title">
            Enlace de Navegacion
          </div>
          <div class="icon-plus">
            <font-awesome-icon :icon="['fas', 'plus']" size="2xs" style="color: #FFD43B;" />
          </div>
        </div>
        <div class="container-menu-item">
          <div>
            <nuxt-link to="/productos" class="menu-item">
              Productos
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/ofertas" class="menu-item">
              Ofertas
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/nosotros" class="menu-item">
              Nosotros
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/contactos" class="menu-item">
              Contacto
            </nuxt-link>
          </div>
        </div>
        <div :class="['container-menu-item-mobile', { 'container-menu-item-mobile--visible': showOptions === 1 }]">
          <div>
            <nuxt-link to="/productos" class="menu-item">
              Productos
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/ofertas" class="menu-item">
              Ofertas
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/nosotros" class="menu-item">
              Nosotros
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/contactos" class="menu-item">
              Contacto
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="footer-menu">
        <p class="container-menu-item-title" @click="toggleOptions(2)">
          Contacto
        </p>
        <div>
          <div class="footer-menu-contact-item">
            <font-awesome-icon :icon="['fas', 'map-location-dot']" style="color: #ffffff;" />
            <p class="footer-menu-p">Av. el sol s/n - Lucanas </p>
          </div>
          <div class="footer-menu-contact-item">
            <font-awesome-icon :icon="['fas', 'phone']" style="color: #ffffff;" />
            <p class="footer-menu-p">991117845 </p>
          </div>
          <div class="footer-menu-contact-item">
            <font-awesome-icon :icon="['fas', 'envelope']" style="color: #ffffff;" />
            <p class="footer-menu-p">
              rukanas@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div class="footer-menu">
        <p class="container-menu-item-title" @click="toggleOptions(3)">
          Enlace Legales
        </p>
        <div class="container-menu-item">
          <div class="menu-item">
            Términos y condiciones
          </div>
          <div class="menu-item">
            Politicas de privacidad
          </div>
        </div>
      </div>

      <div class="footer-menu">
        <p class="container-menu-item-title">
          Síguenos en
        </p>
        <div class="container-menu-item">
          <font-awesome-icon :icon="['fab', 'facebook']" style="color: #ffffff;" />
          <font-awesome-icon :icon="['fab', 'youtube']" />
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
          <font-awesome-icon :icon="['fab', 'tiktok']" />
        </div>
      </div>
      <div class="footer-menu">
        <p class="container-menu-item-title">
          Medios de Pago
        </p>
        <div>
          <img src="@/assets/img/footer/paga-aqui.png" class="footer-pago-footer"/>
        </div>
      </div>
    </div>
    <div>
      <p class="container-footer-inf">
        © 2023 Rukanas Store. Todos los derechos reservados.
      </p>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'CommonFooter',
  data () {
    return {
      lugar: 'Lima',
      showOptions: 0
    }
  },
  methods: {
    // Add any methods you need here
    toggleOptions (option) {
      if (option === this.showOptions) {
        this.showOptions = 0
      } else {
        this.showOptions = option
      }
    }
  }
}
</script>
