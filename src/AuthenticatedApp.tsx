// 登录后展示projectList
import ProjectListScreen from './screens/project-list/index'
import { Button } from "antd";
import { useAuth } from "./context/auth-context";
import { createContext, useContext, useState } from "react";

export const MyContext = createContext<{
  exp: string
} | undefined>(undefined)

// 订阅的方式二： hook
export const UseMyContext = () => {
  const context = useContext(MyContext)
  if (context) {
    return context
  } else {
    throw new Error('请在UseMyContext的provider中使用')
  }
}

export const AuthenticatedApp = () => {
  const {logout} = useAuth()
  const [exp, setExp] = useState<string>('exp01')
  return (
    <div>
      <Button onClick={() => {
        logout()
      }}>登出</Button>
      <MyContext.Provider value={{ exp }}>
        <ProjectListScreen></ProjectListScreen>
      </MyContext.Provider>
    </div>
  )
}