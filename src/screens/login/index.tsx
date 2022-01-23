import { FormEvent } from "react"
const apiUrl = process.env.REACT_APP_API_URL;
interface loginProps {
    username: string,
    password: string
}
export const LoginScreen = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log((event.currentTarget.elements[0] as HTMLFormElement).value)
        const username = (event.currentTarget.elements[0] as HTMLFormElement).value
        const password = (event.currentTarget.elements[1] as HTMLFormElement).value
        login({username, password})
        event.preventDefault()
    }
    const login = (params: loginProps) => {
        fetch(`${apiUrl}/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params)
        }).then(async (res) => {
            let json = await res.json()
            console.log(json)
        })
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