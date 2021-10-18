// import { useEffect, useState } from "react"
import {Input,Select} from 'antd'
export interface User {
    id:string;
    name:string;
    email:string;
    title:string;
    organization:string;
    token:string;
}

interface SearchPanelProps{//定义变量，说明使用类型
    users:User[],
    param:{
        name:string,
        personId:string
    },
    setParam:(param:SearchPanelProps['param'])=> void;//void 说明什么也不返回
}
export const SearchPanel=({param,setParam,users}:SearchPanelProps)=>{ 
    return <form>
        <div>
            <Input type="text" value={param.name} onChange={evt=>setParam({
                ...param,
                name:evt.target.value
            })}/>
            <Select value={param.personId} onChange={value=>setParam({
                ...param,
                personId:value
            })}>
                <Select.Option value={''}>负责人</Select.Option>
                {
                    users.map(user=>
                        <option value={user.id} key={user.id}>{user.name}</option>
                    )
                }
            </Select>
        </div>
    </form>
}