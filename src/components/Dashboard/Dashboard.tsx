import { useSelector } from 'react-redux'
import { RootState, User } from './reducer';

export const Dashboard = () => {
  const { users } = useSelector((state: RootState) => state)

  return (
    <div>
      <h1>Dashboard</h1>
      {users?.map((user: User) => JSON.stringify(user))}
    </div>
  )
}
