import {User} from './search-panel'
import { Table } from "antd";

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