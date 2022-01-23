import { createContext, useContext, useState } from "react";
import * as auth from '../auth-provider'
import { User } from "../screens/project-list/search-panel";
import { logout, register } from "../auth-provider";

interface AuthForm {
  username: string;
  password: string;
}


const AuthContext = createContext<{
  user: User | null;
  login: (form:AuthForm) => Promise<void>;
  register: (form:AuthForm) => Promise<void>;
  logout: () => Promise<void>
} | undefined>(undefined);
AuthContext.displayName = "AuthContext";

// 注入
const AuthProvider = () => {
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

  // 需要把children注入
  return <AuthContext.Provider value={{ user, login, register, logout }}>

  </AuthContext.Provider>
}

// 使用context hook
export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}
