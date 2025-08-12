import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faMapLocationDot, faPhone, faEnvelope, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faMapLocationDot, faPhone, faEnvelope, faFacebook, faYoutube, faXTwitter, faTiktok, faPlus, faMinus, faTrash)
Vue.component('font-awesome-icon', FontAwesomeIcon)
