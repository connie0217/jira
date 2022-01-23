import { SearchPanel } from "./search-panel"
import List from "./list"
import { useEffect, useState } from "react"
import {cleanObject, useMount, useDebounce} from './utils/index'
import qs from 'qs'

const ProjectListScreen = () => {
    // 用户状态： 搜索， id
    const [params, setParam] = useState({
        name: '',
        personId: ''
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])

    // 加载时触发
    useMount(() => {
        fetch('http://localhost:3001/users').then(async (res) => {
            let json = await res.json()
            setUsers(json)
        })
    })
    

    // debounce param
    let debounceParams=useDebounce(params, 3000)
    // 观察params
    useEffect(() => {
        fetch(`http://localhost:3001/projects?${qs.stringify(cleanObject(debounceParams))}`).then(async (res) => {
            let json = await res.json()
            setList(json)
        })
    }, [debounceParams])
    return <div>
        <SearchPanel params={params} users={users} setParam={setParam}/>
        <List list={list} users={users}/>
    </div>
}
export default ProjectListScreen