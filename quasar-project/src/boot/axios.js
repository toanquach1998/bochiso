import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
// const api = axios.create({ baseURL: 'http:/192.168.1.20:8000/api/' })

// const api = axios.create({ baseURL: 'http://192.168.168.10:8000/api/'})

const api = axios.create({
  baseURL: 'http://113.164.176.24:8000/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  }
})
 
//  const api = axios.create({ baseURL: 'http://192.168.168.10:8000/api/' })
//const api = axios.create({baseURL: 'http://localhost:8000/api/'});

// api.defaults.headers.common['Authorization'] = 'Bearer 21|RlIpbTIAM6ZzF2XZmkr2AIEpiuWgbprdi25Clibk'  ;
api.defaults.headers.common['Authorization'] = 'Bearer ' +  localStorage.getItem('key');

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to u se this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
