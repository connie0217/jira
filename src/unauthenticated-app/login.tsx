import { FormEvent } from "react"
import  {useAuth} from "../context/auth-context";
import { Button, Form, Input } from "antd";
import {useAsync} from "../utils/useAsync";

interface LoginParam {
  username: string;
  password: string;
}

export const LoginScreen = () => {
  const { login } = useAuth()
  const {run, isLoading} = useAsync()
  return <Form onFinish={async ({username, password}: LoginParam) => {
    try {
      await login({ username, password })
      // await run(login({ username, password }))
    } catch (error) {
      console.log('登录catch', error)
    }

  }
  }>
    <Form.Item name="username">
      <Input placeholder="用户名"/>
    </Form.Item>
    <Form.Item name="password">
      <Input type="password"  placeholder={'密码'}/>
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType={"submit"} loading={isLoading}>
        登录
      </Button>
    </Form.Item>
  </Form>
  // return <form onSubmit={handleSubmit}>
  //   <div>
  //     <label htmlFor="username">用户名</label>
  //     <input type="text" id="username"/>
  //   </div>
  //   <div>
  //     <label htmlFor="password">密码</label>
  //     <input type="password" id="password" />
  //   </div>
  //   <div>
  //     <button type="submit">登录</button>
  //   </div>
  // </form>
}