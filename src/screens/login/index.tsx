import { FormEvent } from "react"
import {useAuth} from '../../context/auth-context'
import { Form, Input } from "antd";
import { useDocTitle } from "../../utils/useDocTitle";


const apiUrl = process.env.REACT_APP_API_URL;
interface loginProps {
    username: string,
    password: string
}
export const LoginScreen = () => {
    const { register } = useAuth()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log((event.currentTarget.elements[0] as HTMLFormElement).value)
        const username = (event.currentTarget.elements[0] as HTMLFormElement).value
        const password = (event.currentTarget.elements[1] as HTMLFormElement).value
        register({ username, password })
        event.preventDefault()
    }
    useDocTitle('jira登录')
    return <Form>
        <Form.Item label="用户名" htmlFor="username">
            <Input name="username"/>
        </Form.Item>
    </Form>
    // return <form onSubmit={handleSubmit}>
    //     <div>
    //         <label htmlFor="username">用户名</label>
    //         <input type="text" id="username"/>
    //     </div>
    //     <div>
    //         <label htmlFor="password">密码</label>
    //         <input type="password" id="password" />
    //     </div>
    //     <div>
    //         <button type="submit">登录</button>
    //     </div>
    // </form>
}