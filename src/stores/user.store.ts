import type { UserInterface } from '@/interfaces'
import { COOKIE_TOKEN_KEY } from '@/utils/constants/auth.constants'
import { useCookies } from '@vueuse/integrations/useCookies'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // user token stored here
  const token = useCookies()

  // active user data
  const user = ref<Partial<UserInterface>>()

  // is user data loading ?
  const loading = ref(true)

  // a computed value to check if user is logged in
  const isLoggedIn = computed(
    () => token.get(COOKIE_TOKEN_KEY) !== undefined && token.get(COOKIE_TOKEN_KEY) !== ''
  )

  // Set active user
  function setUser(newUser: Partial<UserInterface>) {
    user.value = newUser
  }

  // Persist active user token in cookie
  function setToken(newToken: string) {
    token.set(COOKIE_TOKEN_KEY, newToken)
  }

  // fetching user ?
  function setLoading(newLoading: boolean) {
    loading.value = newLoading
  }

  // Log out a user
  async function logoutUser() {
    token.remove(COOKIE_TOKEN_KEY)
    user.value = undefined
  }

  return { token, user, loading, isLoggedIn, setUser, setLoading, setToken, logoutUser }
})
