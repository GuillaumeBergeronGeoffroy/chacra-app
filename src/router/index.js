import Vue from 'vue'
import VueRouter from 'vue-router'
import Marketplace from '../views/Marketplace.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Marketplace',
    component: Marketplace
  },
]

const router = new VueRouter({
  routes
})

export default router
