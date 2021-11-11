import { useContext, useEffect } from 'react'
import { Table } from 'antd'
import { UsersContext } from 'Users/UsersContext'

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
]

export const Dashboard = () => {
  const {users, getUsers} = useContext(UsersContext);
  
  useEffect(() => {
    getUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <Table
        columns={columns}
        dataSource={users.map((user) => ({
          key: user.id,
          id: user.id,
          name: user.name,
          email: user.email,
        }))}
      />
    </div>
  )
}
