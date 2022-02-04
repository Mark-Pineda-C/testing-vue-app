import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PastOrdersVue from '../views/PastOrders.vue'
import ProductsVue from '../views/Products.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsVue
  },
  {
    path: '/past-orders',
    name: 'PastOrders',
    component: PastOrdersVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
