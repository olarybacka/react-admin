import { actionTypes } from './actions'

type Action = {
  type: string
  payload: any
}
export type UserState = {
  usersList: User[]
}

export type User = {
  id: number
  name: string
  username: string
  email: string
}

const initialState: UserState = {
  usersList: []
}

export const usersReducer = (
  state: UserState = initialState,
  { type, payload }: Action,
) => {
  switch (type) {
    case actionTypes.updateUser:
      return {
        ...state,
        usersList: { ...state, payload },
      }
    case actionTypes.setUsers:
      return {
        ...state,
        usersList: [...payload],
      }
    default:
      return state
  }
}
