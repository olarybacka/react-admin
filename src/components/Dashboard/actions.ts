import { User } from './reducer'

export const actionTypes = {
  updateUser: 'UPDATE_USER',
  setUsers: 'SET_USERS',
}

export const updateUser = (user: User) => ({
  type: actionTypes.updateUser,
  user,
})

export const setUsers = (users: User[]) => ({
  type: actionTypes.setUsers,
  users,
})
