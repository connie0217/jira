import {User} from './search-panel'
import { Table } from "antd";
import { useEffect } from "react";
import { Route, useSearchParams, BrowserRouter, Link } from "react-router-dom";
import { TableProps } from "antd/lib/table/Table";

export interface Project {
    id: string;
    name: string;
    email: string;
    title: string;
    organization: string;
    personId: string;
}


interface ListProps extends TableProps<Project>{
    users: User[];
    list: Project[];
}


const List = (props: ListProps) => {
    const users = {props}
    return <div>
            <Table
              columns={
                  [
                      {
                          title: "名称",
                          dataIndex: "name",
                          key: "id",
                          render: (val, project) => {
                              return <Link to={String(project.id)}>{val}</Link>
                          }
                      },
                      {
                          title: "负责人",
                          dataIndex: "personId",
                          key: "personId",
                          render: (val) => props.users.find(user => user.id === val)?.name
                      },
                      {
                          title: "部门",
                          dataIndex: "organization",
                          key: "organization"
                      }
                  ]
              }
              dataSource={props.list}
              rowKey={"id"}
            />
    </div>
}
export default List