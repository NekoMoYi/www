import Vue from 'vue'
import app from './app.vue'
import router from './utils/router'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify: window.Vuetify,
  render: h => h(app)
}).$mount('#app')
