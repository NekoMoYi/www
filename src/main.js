import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import app from './app.vue'
import router from './utils/router'
import './css/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(app)
}).$mount('#app')
