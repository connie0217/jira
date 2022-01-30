import { stringify } from "qs";
import * as auth from "../auth-provider";
import { useAuth } from "../context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;


interface Config extends RequestInit{
  token?: string;
  data?: object;
}

// 直接解构，处理兜底参数
export const http = (endpoint: string, {data, token, headers, ...customConfig}:Config = {}) => {
  let config = {
    method: "GET",
    headers: {
      Authorization: token? token : '',
      "Content-Type": data ? 'application/json' : ''
    },
    ...customConfig
  }
  if (config.method.toLocaleLowerCase() === 'get') {
    endpoint +=`?${stringify(data)}`
  } else {
    config.body = JSON.stringify(data)
  }
  // 注意： fetch只会因为网络的错误抛出异常，不会顾及服务端的响应吗
  return fetch(`${apiUrl}/${endpoint}`, config).then(async(res) => {
    if (res.status === 401) {
      // 需要登出
      await auth.logout()
      window.location.reload()
      return Promise.reject('重新登录')
    }
    let data = await res.json()
    if (res.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

// 关联context-user的hook, 每次请求带上token
export const useHttp = () => {
  const user = useAuth().user
  return (...[endpoint, customConfig]: Parameters<typeof http>) =>
    http(endpoint, {
      "token": user? user.token: '',
      ...customConfig,
    })
}