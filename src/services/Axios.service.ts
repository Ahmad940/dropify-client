import axios from 'axios'

const url = import.meta.env.VITE_BACKEND_URL

export default class AxiosService {
  static axiosInstance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
  static axiosProtectedInstance = (token: string) =>
    axios.create({
      baseURL: url,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`
      }
    })
}
