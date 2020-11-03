import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { response } from 'express'

axios.defaults.baseURL = 'http://localhost:8090'

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
})

axios.interceptors.response.use((response: AxiosResponse) => {
  if (response.data.err === 1) {
    return Promise.reject(response.data.data)
  }
  return response.data.data
}, err => {
  return Promise.reject(err)
})

export default axios