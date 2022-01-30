import { SearchPanel } from "./search-panel"
import List from "./list"
import { useEffect, useState, useContext } from "react"
import {cleanObject, useMount, useDebounce} from './utils/index'
import { useHttp } from "../../utils/http";
import {MyContext} from "../../AuthenticatedApp";

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

    return<MyContext.Consumer>
        {
            (exp) => {
                return  <div>
                    <SearchPanel params={params} users={users} setParam={setParam}/>
                    <List list={list} users={users}/>
                </div>
            }
        }
    </MyContext.Consumer>

    // // 订阅的方式二： hook
    // const context = useContext(MyContext) || {exp: 'null'}
    // return <div>
    //      {JSON.stringify(context.exp)}
    // </div>
}
export default ProjectListScreen