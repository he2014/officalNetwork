// import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'
import ApiConfig from './api'
// 响应时间
axios.defaults.timeout = 5 * 1000

// 配置cookie
// axios.defaults.withCredentials = true
const defaultHost = ApiConfig.defaultHost
const apis = ApiConfig.apis
const ENV = process.env.ENV_CONFIG
// 本地环境
axios.defaults.baseURL = process.env.API_ROOT
// 测试环境
// axios.defaults.baseURL = 'http://47.93.230.5:9000'

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    // 统一封装每次进行请求数据时，执行loading组件
     
    return config
  },
  err => {
    alert('请求参数错误')
    return Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.data.code === '00') {
      // 如果returnCode码为0，代表成功，loading组件关闭
      return res.data || {}
    } else {
      alert(res.data.msg)
      // Toast(res.data.error.returnUserMessage || '服务请求报错')
    }
  },
  err => {

    alert('请求失败，请稍后再试')
    return Promise.reject(err)
  }
)

// 处理不同环境的Url
function getUrl (apiName) {
  const api = apis[apiName]
  if (ENV === 'dev' && api.serve) {
    return api.serve
  }
  if (api.host && api.host[ENV]) {
    axios.defaults.baseURL = api.host[ENV]
    return api.path
  }
  axios.defaults.baseURL = defaultHost[ENV]
  console.log(api.path)
  return api.path
}

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 * 调用: this.$fetchGet('static/mock/welcome.json', param
 */

export function fetchGet (apiName, params = {}) {
  const reqUrl = getUrl(apiName)
  return new Promise((resolve, reject) => {
    axios.get(reqUrl, {
      params: params
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetchPost (apiName, data = {}) {
  const reqUrl = getUrl(apiName)
  return new Promise((resolve, reject) => {
    axios.post(reqUrl, Qs.stringify(data), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        resolve(res)
      }, err => {
        reject(err)
      })
  })
}
