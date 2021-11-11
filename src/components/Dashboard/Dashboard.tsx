import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { getUsers } from './actions'
import { Table } from 'antd'

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
  const {
    users: { usersList },
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <Table
        columns={columns}
        dataSource={usersList.map((user) => ({
          key: user.id,
          id: user.id,
          name: user.name,
          email: user.email,
        }))}
      />
    </div>
  )
}
