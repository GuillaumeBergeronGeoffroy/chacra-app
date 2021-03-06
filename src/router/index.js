import Vue from 'vue'
import VueRouter from 'vue-router'
// import Marketplace from '../views/Marketplace.vue'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
]

const router = new VueRouter({
  routes
})

export default router
