import { SearchPanel } from "./search-panel"
import List from "./list"
import React, { useEffect, useState, useContext } from "react"
import {cleanObject, useDebounce} from './utils/index'
import { useHttp } from "../../utils/http";
import {MyContext} from "../../AuthenticatedApp";
import { useAsync } from "../../utils/useAsync";
import { useUsers } from "../../api/user";
import { useProject } from "../../api/project";
import styled from "@emotion/styled";
import { Button } from "antd";
import { Header } from "../../component/Header";

const ProjectListScreen: React.FC = () => {
    // 用户状态： 搜索， id
    const [params, setParam] = useState({
        name: '',
        personId: ''
    })
    // const [users, setUsers] = useState([])
    // const [list, setList] = useState([])
    const client = useHttp()
    const {run, isLoading} = useAsync()

    // 加载时触发
    // useMount(() => {
    //     // client('users').then(setUsers)
    //     run(client('users').then(setUsers))
    //     // client('users').then(setUsers)
    //     return () => {
    //         setUsers([])
    //     }
    // })

    const {data: users} =  useUsers()
    

    // debounce param
    let debounceParams=useDebounce(params, 300)
    // 观察params
    // useEffect(() => {
    //     client('projects', {
    //         data: cleanObject(debounceParams)
    //     }).then(setList)
    // }, [debounceParams])

    const {data: list}= useProject(debounceParams)

    return<Container>
                    <Header>
                        <h2>项目列表</h2>
                        <Button style={{ padding: 0 }}  type={"link"}>创建项目</Button>
                    </Header>
                        <SearchPanel params={params} users={users || []} setParam={setParam}/>
                        <List list={list || []}  users={users || []}/>
    </Container>

    // // 订阅的方式二： hook
    // const context = useContext(MyContext) || {exp: 'null'}
    // return <div>
    //      {JSON.stringify(context.exp)}
    // </div>
}
export default ProjectListScreen


const Container = styled.div`
    padding: 3.2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const ToolBar = styled.div`
    
`