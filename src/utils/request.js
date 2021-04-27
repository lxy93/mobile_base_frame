import axios from 'axios'
import store from '../store/index'

const request = axios.create({
  baseURL: '', // 接口的基础路径
  timeout: 5000
})

request.interceptors.request.use(config => {
  store.commit('LOADINGSHOW')
  if (store.getters.token) {
    config.headers.Authorization = `${store.getters.token}`
  }
  return config
}, error => {
  store.commit('LOADINGHIDEN')
  return Promise.reject(error)
})

request.interceptors.response.use(response => {
  const { msg, result, ret } = response.data
  if (result) {
    store.commit('LOADINGHIDEN')
    return ret
  } else {
    return Promise.reject(new Error(msg))
  }
}, error => {
  this.$total(error.message)
  return Promise.reject(error.message)
})

export default request
