import { useState } from "react";
import {LoginScreen} from "./login";
import {RegisterScreen} from "./register";
import styled from "@emotion/styled";
import { Button, Card, Divider } from "antd";


// 登录页面

export const UnauthenticatedApp = () => {
  // 是否是注册
  const [isRegister, setRegister] = useState(false)

  return (
    <Container>
      <ShowCard>
        {isRegister ? <RegisterScreen></RegisterScreen>: <LoginScreen></LoginScreen> }
        <Divider/>
        <Button type={'link'}   onClick={() => setRegister(!isRegister)}>
          {isRegister ? "已有账号？直接登录" : "没有账号？注册账号"}
        </Button>
        {/*<button onClick={() => setRegister(!isRegister)}>切换到{isRegister ? '登录':'注册'}</button>*/}
      </ShowCard>
    </Container>
  )
}     

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
const ShowCard = styled(Card)`
  width: 40rem;
  //min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`