import { FormEvent } from "react"
import  {useAuth} from "../context/auth-context";
import { Button, Form, Input } from "antd";

export const RegisterScreen = () => {
  const { register } = useAuth()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log((event.currentTarget.elements[0] as HTMLFormElement).value)
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value
    register({ username, password })
    event.preventDefault()
  }
  return <Form onFinish={({username, password, cpassword}: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    console.log(cpassword)
    register({ username, password })
  }
  }>
    <Form.Item name="username">
      <Input placeholder="用户名"/>
    </Form.Item>
    <Form.Item name="password">
      <Input type="password"  placeholder={'密码'}/>
    </Form.Item>
    <Form.Item name="cpassword">
      <Input type="password"  placeholder={'确认密码'}/>
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType={"submit"}>
        注册
      </Button>
    </Form.Item>
  </Form>
}