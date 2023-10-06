import { createMemoryHistory, createRouter } from 'vue-router'
import { authRoutes } from './auth.router'
import { dashboardRoutes } from './dashboard.router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      redirect: '/auth/login'
    },
    authRoutes,
    dashboardRoutes
    // {
    //   path: '/about',
    //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('@/views/AboutView.vue')
    // }
  ]
})

export default router
