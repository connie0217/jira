// import { useEffect, useState } from "react"

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
    
    // const [users]
    return <form action="">
        <div>
            <input type="text" value={params.name}  onChange={evt => setParam({
                ...params,
                name: evt.target.value
            })}/>
            <select value={params.name} onChange={evt => setParam({
                ...params,
                personId: evt.target.value
            })}>
                <option value={''} >负责人</option>
                {
                    users.map((user) =>  <option value={user.id} key={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}