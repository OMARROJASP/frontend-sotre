import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faShoppingCart)
Vue.component('font-awesome-icon', FontAwesomeIcon)
