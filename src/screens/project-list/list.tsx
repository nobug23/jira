import {User} from 'screens/project-list/search-panel'
import {Table} from 'antd'
interface Project {
    id:string,
    name:string,
    personId:string,
    pin:string,
    organization:string
}

interface ListProps {
    list:Project[],
    users:User[]
}
export const List=({list,users}:ListProps)=>{
    return <Table
    rowKey={"id"}
    pagination={false}
    columns={[
      
      {
        title: "名称",
        sorter: (a, b) => a.name.localeCompare(b.name),
        dataIndex:'name'
      },
      {
        title: "部门",
        dataIndex: "organization",
      },
      {
        title: "负责人",
        render(value, project) {
          return (
            <span>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </span>
          );
        },
      }
    ]}
    dataSource={list}
  />
}