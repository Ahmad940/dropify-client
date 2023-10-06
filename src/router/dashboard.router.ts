import Dashboard from '@/views/DashboardView.vue'
import type { RouteRecordRaw } from 'vue-router'

export const dashboardRoutes: RouteRecordRaw = {
  path: '/dashboard',
  children: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
}
