import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/simon',
      name: 'simon',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SimonView.vue'),
    },
    {
      path: '/benjamin',
      name: 'benjamin',
      component: () => import('../views/BenjaminView.vue'),
    }
  ],
})

export default router
