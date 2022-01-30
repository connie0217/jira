import {User} from './search-panel'
import { Table } from "antd";
import { useEffect } from "react";
import { Route, useSearchParams, BrowserRouter } from "react-router-dom";

interface Project {
    id?: string;
    name: string;
    email: string;
    title: string;
    organization: string;
    personId: string;
}


interface ListProps {
    list: Project[];
    users: User[];
}

const List = ({list, users}: ListProps) => {
    // const [searchParams, setSearchParams] = useSearchParams()
    // console.log('searchParams', searchParams)
    useEffect(() => {
        console.log('挂在时候')
        return () => {
            console.log('卸载时候')
        }
    }, [])

    return <div>
            <Table
              columns={
                  [
                      {
                          title: "名称",
                          dataIndex: "name",
                          key: "id"
                      },
                      {
                          title: "负责人",
                          dataIndex: "personId",
                          key: "id",
                          render: (val) => users.find(user => user.id === val)?.name
                      }
                  ]
              }
              dataSource={list}
              rowKey={"id"}
            />
    </div>
}
export default List