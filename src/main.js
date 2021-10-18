import Vue from 'vue'
import App from './App.vue'
import router from './router'
import GlobalMixin from './mixins/Global.vue'

Vue.config.productionTip = false

new Vue({
  mixins: [GlobalMixin],
  router,
  render: h => h(App)
}).$mount('#app')
