// import { useEffect, useState } from "react"

import { Form, Input, Select } from "antd";

export interface User{
    id: string;
    name: string;
    token: string;
}

interface SearchPanelProps{
    users: User[];
    params: {
        name: string;
        personId: string;
    };
    setParam: (param: SearchPanelProps['params']) => void;
}

export const SearchPanel = ({params, setParam, users}: SearchPanelProps ) => {

    return <Form>
        <Form.Item >
            <Input placeholder="请输入.." value={params.name}></Input>
        </Form.Item>
        <Form.Item>
            <Select value={params.personId} onSelect={
                (val: User['id']) => {
                    setParam({
                        ...params,
                        personId: val
                    })
                }
            }>
                {
                    users.map((user) => <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>)
                    /*<Select.Option></Select.Option>*/}
            </Select>
        </Form.Item>
    </Form>
    // const [users]
    // return <form action="">
    //     <div>
    //         <input type="text" value={params.name}  onChange={evt => setParam({
    //             ...params,
    //             name: evt.target.value
    //         })}/>
    //         <select value={params.personId} onChange={evt => {
    //             setParam({
    //                 ...params,
    //                 personId: evt.target.value
    //             })
    //         }
    //         }>
    //             <option value={''} >负责人</option>
    //             {
    //                 users.map((user) =>  <option value={user.id} key={user.id}>{user.name}</option>)
    //             }
    //         </select>
    //     </div>
    // </form>
}