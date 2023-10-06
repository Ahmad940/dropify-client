import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import type { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw = {
  path: '/auth',
  children: [
    {
      path: 'login',
      name: 'login',
      component: LoginView
    },
    {
      path: 'signup',
      name: 'signup',
      component: SignupView
    }
  ]
}
