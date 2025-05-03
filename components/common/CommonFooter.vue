<template>
  <div class="container-footer">
    <div class="container-footer-sup">
      <div class="footer-logo">
        <p class="text-orange">
          Rukanas
          <span class="text-white">
            Store
          </span>
        </p>
      </div>
      <div class="footer-menu">
        <p class="container-menu-item-title">
          Enlace de Navegacion
        </p>
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
      </div>
      <div class="footer-menu">
        <p class="container-menu-item-title">
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
        <p class="container-menu-item-title">
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
    </div>
  </div>
</template>
<script>

</script>
