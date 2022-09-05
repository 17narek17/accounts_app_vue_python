import { createRouter, createWebHistory } from 'vue-router'
import AccountView from '../views/AccountView.vue'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/accounts/:id',
    name: 'account',
    component: AccountView
  }
]

const router = createRouter({
  history: createWebHistory( process.env.BASE_URL ),
  routes
})

export default router
