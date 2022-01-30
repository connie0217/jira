// 登录后展示projectList
import ProjectListScreen from './screens/project-list/index'
import { Button, Dropdown, Menu } from "antd";
import { useAuth } from "./context/auth-context";
import { createContext, useContext, useState } from "react";
import { Header } from "./component/Header";
import styled from "@emotion/styled";
import { useDocTitle } from "./utils/useDocTitle";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Project } from "./screens/project";

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
  const {logout, user} = useAuth()
  const [exp, setExp] = useState<string>('exp01')
  useDocTitle('列表')
  return (
    <div>
      <Header>
        <Logo>
          <h2 style={{margin: 0}}>Jira</h2>
          <span>项目</span>
          <span>组员</span>
        </Logo>
        <div>
          <Dropdown overlay={
            <Menu>
              <Menu.Item key={"logout"}>
                <Button onClick={() => {
                  logout()
                }}>登出</Button>
              </Menu.Item>
            </Menu>
          }>
            <Button type="link" onClick={(e) => e.preventDefault()}>
              Hi, {user?.name}
            </Button>
          </Dropdown>
        </div>
      </Header>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path={"/project"} element={<ProjectListScreen></ProjectListScreen>}/>
            <Route path={"/project/:projectId/*"} element={<Project></Project>} />
            <Route path={"/"} element={<Navigate to={"/project"}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

const Logo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  h2: {
    margin-bottom: 0;
  }
`
