import { useUserStore } from '@/stores/user.store'
import { useRouter, type RouteLocationNormalized } from 'vue-router'

export function redirectIfLoggedIn(route: RouteLocationNormalized) {
  const userStore = useUserStore()

  if (userStore.isLoggedIn && (route.path === '/auth/login' || route.path === '/auth/signup')) {
    return true
  }

  return false
}

export default {
  install() {
    const router = useRouter()
    console.log('Oi')

    router.beforeEach((to, from, next) => {
      console.log(to, from, next)
      if (redirectIfLoggedIn(to)) {
        next({ name: 'dashboard' })
      } else {
        next()
      }
    })
  }
}
