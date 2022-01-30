import { createContext, ReactNode, useContext, useState } from "react";
import * as auth from '../auth-provider'
import { User } from "../screens/project-list/search-panel";
import { getToken, logout, register } from "../auth-provider";
import { useMount } from "../screens/project-list/utils";
import { http } from "../utils/http";

interface AuthForm {
  username: string;
  password: string;
}


const AuthContext = createContext<{
  user: User | null;
  login: (form:AuthForm) => Promise<void>;
  register: (form:AuthForm) => Promise<void>;
  logout: () => Promise<void>;
} | undefined>(undefined);
AuthContext.displayName = "AuthContext";


const checkLogin = (token: string) => {
  return http('me', {token}).then(
    data => {
      return data.user
    }
  )
}
// 注入
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const login = (form:AuthForm) => {
    return auth.login(form).then(setUser)
  }
  const register = (form:AuthForm) => {
    return auth.register(form).then(setUser)
  }
  const logout =() => {
    return auth.logout().then(() =>setUser(null))
  }

  // 首次加载判断有无登录态，并注入到user
  useMount(() => {
    let token = getToken() || ''
    if (token) {
      checkLogin(token).then(setUser)
    }
  })

  // 需要把children注入
  return <AuthContext.Provider children={children} value={{ user, login, register, logout }} ></AuthContext.Provider>
}

// 使用context hook
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth 必须在 provider 中使用");
  } else {
    return context;
  }
}
