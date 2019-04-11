import axios from 'axios'

const service = axios.create({
  timeout: 50000
})
// 请求拦截器
service.interceptors.request.use(function (config) {}, function (error) {
  console.log(error)
})

// 响应拦截器
service.interceptors.response.use(function (response) {}, function (error) {
  console.log(error)
})

export default service
