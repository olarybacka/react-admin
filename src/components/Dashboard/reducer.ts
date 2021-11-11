import { actionTypes } from './actions'

type Action = {
  type: string,
  payload: any
}
export type RootState = {
  users: User[]
}
export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    city: string
  }
}

export const usersReducer = (state: RootState, { type, payload }: Action) => {
  switch (type) {
    case actionTypes.updateUser:
      return {
        ...state,
        users: {...state.users, payload}
      }
      case actionTypes.setUsers:
        return {
          ...state,
          users: payload
        }
  }
}
