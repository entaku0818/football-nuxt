/**
 * utils/axios.js
 * For calling it with repository function
 * configの参考->https://github.com/axios/axios
 **/

import axiosBase from 'axios'

const axios = axiosBase.create({
  baseURL: process.env.baseURL
})

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    const token = localStorage.getItem('nimana_token')
    if (token) {
      config.headers = {
        'X-Auth-Token': '9703d46d0a6c4e3f8f76ca1d17dcc150',
        'Access-Control-Allow-Origin':'*'
      }
    }
    return config
  },
  function(request) {
    return request
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    // Do something with request error
    console.error(error)
    if (
      error.response.status === 401 &&
      window.location.pathname !== '/login'
    ) {
      window.location = '/login'
    }
    return Promise.reject(error.response)
  }
)
export default axios
