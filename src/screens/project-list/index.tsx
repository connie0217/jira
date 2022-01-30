import { SearchPanel } from "./search-panel"
import List from "./list"
import { useEffect, useState } from "react"
import {cleanObject, useMount, useDebounce} from './utils/index'
import { useHttp } from "../../utils/http";

const ProjectListScreen = () => {
    // 用户状态： 搜索， id
    const [params, setParam] = useState({
        name: '',
        personId: ''
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])
    const client = useHttp()
    // 加载时触发
    useMount(() => {
        // client('users').then(setUsers)
        client('users').then(setUsers)
    })
    

    // debounce param
    let debounceParams=useDebounce(params, 3000)
    // 观察params
    useEffect(() => {
        client('projects', {
            data: cleanObject(debounceParams)
        }).then(setList)
    }, [debounceParams])
    return <div>
        <SearchPanel params={params} users={users} setParam={setParam}/>
        <List list={list} users={users}/>
    </div>
}
export default ProjectListScreen