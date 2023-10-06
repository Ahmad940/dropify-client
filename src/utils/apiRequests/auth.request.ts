import { useApi } from '@/composables/useApi'
import { useUserStore } from '@/stores/user.store'
import type { AxiosResponse } from 'axios'
import type { Ref } from 'vue'
import { apiResponse } from '../apiResponse'
import { COOKIE_TOKEN_KEY } from '../constants/auth.constants'

const authRequests = () => ({
  profile: async () => {
    try {
      const response = await useApi().get('/auth/profile')
      return apiResponse({ success: true, message: 'Fetched.', data: response.data })
    } catch (err: any) {
      return apiResponse({
        success: false,
        message: err?.response?.data?.message || err?.message || 'Get user profile error.',
        error: err
      })
    }
  },
  login: async (credentials: { username: string; password: string }, loading?: Ref<boolean>) => {
    try {
      // ? log user in and get token
      const response: AxiosResponse<{ token: string }> = await useApi(loading).post(
        '/auth/login',
        credentials
      )

      const userStore = useUserStore()
      userStore.setToken(response.data.token)

      return apiResponse({
        success: true,
        message: 'User successfully logged in.',
        data: {
          token: userStore.token.get(COOKIE_TOKEN_KEY)
        }
      })
    } catch (err: any) {
      return apiResponse({
        success: false,
        message: err?.response?.data?.message || err?.message || 'User Log in error.',
        error: err
      })
    }
  },
  signUp: async (data: { username: string; password: string }) => {
    try {
      const response: AxiosResponse<{ token: string }> = await useApi().post('/auth/register', data)

      const token = response.data.token
      localStorage.setItem(COOKIE_TOKEN_KEY, token)

      // fetch user's details
      // const fetchProfile = await authRequests(token).profile()

      return apiResponse({
        success: true,
        message: 'Signup successful.',
        data: {
          token
          // user: fetchProfile
        }
      })
    } catch (err: any) {
      return apiResponse({
        success: false,
        message: err.message || 'Error signing you up.',
        error: err
      })
    }
  }
})

export default authRequests
