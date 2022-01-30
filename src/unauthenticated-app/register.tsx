import { FormEvent } from "react"
import  {useAuth} from "../context/auth-context";
import { Button, Form, Input } from "antd";
import { useAsync } from "../utils/useAsync";

export const RegisterScreen = () => {
  const { register } = useAuth()
  const {run} = useAsync()
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log((event.currentTarget.elements[0] as HTMLFormElement).value)
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value
    try {
      await run(register({ username, password }))
    } catch (err) {
      console.log(err)
    }
    event.preventDefault()
  }
  return <Form onFinish={async ({username, password, cpassword}: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    try {
      await run(register({ username, password }))
    } catch (err) {
      console.log(err)
    }
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