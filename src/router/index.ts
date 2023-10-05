import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue';
import DashboardView from '@/views/DashboardView.vue';
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      redirect: '/auth/login'
    },
    {
      path: '/auth/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

export default router
