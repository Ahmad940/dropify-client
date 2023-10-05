import AxiosService from '@/services/Axios.service'
import type { AxiosResponse } from 'axios'
import { apiResponse } from '../apiResponse'
import { LOCALSTORAGE_TOKEN_KEY } from '../constants'

const axiosInstance = AxiosService.axiosInstance
const axiosProtectedInstance = AxiosService.axiosProtectedInstance

const authRequests = (bearerToken: string = localStorage.getItem('token') || '') => ({
  profile: async () => {
    try {
      const response = await axiosProtectedInstance(bearerToken)({
        method: 'GET',
        url: '/auth/profile'
      })
      return apiResponse({ success: true, message: 'Fetched.', data: response.data })
    } catch (err: any) {
      return apiResponse({
        success: false,
        message: err?.response?.data?.message || err?.message || 'Get user profile error.',
        error: err
      })
    }
  },
  login: async (credentials: { username: string; password: string }) => {
    try {
      // ? log user in and get token
      const response: AxiosResponse<{ token: string }> = await axiosInstance({
        method: 'POST',
        url: '/auth/login',
        data: credentials
      })

      const token = response.data.token
      localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token)

      // fetch user's details
      // const fetchProfile = await authRequests(token).profile()

      return apiResponse({
        success: true,
        message: 'User successfully logged in.',
        data: {
          token,
          // user: fetchProfile
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
      const response: AxiosResponse<{ token: string }> = await axiosInstance({
        method: 'POST',
        url: '/auth/register',
        data
      })

      const token = response.data.token
      localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token)

      // fetch user's details
      // const fetchProfile = await authRequests(token).profile()

      return apiResponse({
        success: true,
        message: 'Signup successful.',
        data: {
          token,
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
