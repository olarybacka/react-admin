import { User } from './reducer'
import { Dispatch } from 'redux'

export const actionTypes = {
  updateUser: 'UPDATE_USER',
  setUsers: 'SET_USERS',
}

export const updateUser = (user: User) => ({
  type: actionTypes.updateUser,
  user,
})

export const getUsers = () => async (dispatch: Dispatch) => {
  const users: User[] = await fetch(
    'https://jsonplaceholder.typicode.com/users',
  ).then((response) => response.json())

  dispatch(setUsers(users))
}

export const setUsers = (users: User[]) => {
  return {
    type: actionTypes.setUsers,
    payload: users,
  }
}
