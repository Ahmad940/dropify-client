import { useUserStore } from '@/stores/user.store'
import axios, { type AxiosInstance, type AxiosRequestHeaders } from 'axios'
import type { Ref } from 'vue'

export const useApi = (isLoading?: Ref<boolean>) => {
  // Here we set the base URL for all requests made to the api
  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
  })

  // We set an interceptor for each request to
  // include Bearer token to the request if user is logged in
  api.interceptors.request.use((config) => {
    const userSession = useUserStore()
    // set loading true on request if isLoading is not null
    if (isLoading) isLoading.value = true

    // if user is logged in, append authorization header to the headers object
    if (userSession.isLoggedIn) {
      config.headers = {
        Authorization: `Bearer ${userSession.token}`
      } as AxiosRequestHeaders
    }

    return config
  })

  // This runs before any response is return
  api.interceptors.response.use(
    (response) => {
      // set loading false if isLoading is not null
      if (isLoading) isLoading.value = false

      return response
    },
    (error) => {
      // set loading false if isLoading is not null
      if (isLoading) isLoading.value = false

      // throw error
      return Promise.reject(error)
    }
  )

  return api
}
