import { useState } from "react";
import {LoginScreen} from "./login";
import {RegisterScreen} from "./register";
import styled from "@emotion/styled";


// 登录页面

export const UnauthenticatedApp = () => {
  // 是否是注册
  const [isRegister, setRegister] = useState(false)

  return (
    <div>
      {isRegister ? <RegisterScreen></RegisterScreen>: <LoginScreen></LoginScreen> }
      <button onClick={() => setRegister(!isRegister)}>切换到{isRegister ? '登录':'注册'}</button>
    </div>
  )
}     

const container = styled.div`
display: flex;
`