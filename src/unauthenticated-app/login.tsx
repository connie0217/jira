import { FormEvent } from "react"
import  {useAuth} from "../context/auth-context";
;
export const LoginScreen = () => {
  const { login } = useAuth()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log((event.currentTarget.elements[0] as HTMLFormElement).value)
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value
    login({ username, password })
  }
  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">用户名</label>
      <input type="text" id="username"/>
    </div>
    <div>
      <label htmlFor="password">密码</label>
      <input type="password" id="password" />
    </div>
    <div>
      <button type="submit">登录</button>
    </div>
  </form>
}