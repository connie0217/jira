import { User } from "./screens/project-list/search-panel";

const apiUrl = process.env.REACT_APP_API_URL;
const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = async ({user}: {user: User}) => {
  // 登录成功后操作
  window.localStorage.setItem(localStorageKey, user.token)
  return user
}

export const login = (data: {username: string; password: string}) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async(res) => {
    // let data = await res.json()
    if (res.ok) {
      // console.log('handleUserResponse', handleUserResponse(data))
      return handleUserResponse(await res.json())
    }
    return Promise.reject(await res.json())
  })
}

export const register =  (data: {username: string; password: string}) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async(res) => {
    if (res && res.ok) {
      // let data = await res.json()
      return handleUserResponse(await res.json())
    }
    return Promise.reject(data)
  })
}

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey)
}