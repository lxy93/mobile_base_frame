import axios from 'axios'

const request = axios.create({
  baseURL: '' // 接口的基础路径
})

export default request
