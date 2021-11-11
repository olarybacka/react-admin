import { createContext, Dispatch, FC, useReducer } from 'react'
import { setUsers } from './actions'
import { Action, User, usersReducer, UserState } from './reducer'

const initialState: UserState = {
  usersList: []
}

export type UsersContextProps = {
  users: User[]
  getUsers: () => void
}

export const UsersContext = createContext<UsersContextProps>(
  {} as UsersContextProps,
)

export type UseUsersReducer = [UserState, Dispatch<Action>];


export const UsersProvider: FC = ({ children }) => {
  const [state, dispatch]: UseUsersReducer = useReducer(usersReducer, initialState)
  const getUsers = async () => {
    const users: User[] = await fetch(
      'https://jsonplaceholder.typicode.com/users',
    ).then((response) => response.json())
  
    dispatch(setUsers(users))
  }

  return (
    <UsersContext.Provider value={{ users: state.usersList, getUsers }}>
      {children}
    </UsersContext.Provider>
  )
}
