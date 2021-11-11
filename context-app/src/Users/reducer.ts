import { actionTypes } from './actions'

export type Action = {
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

export const usersReducer = (state: UserState, { type, payload }: Action): UserState => {
  switch (type) {
    case actionTypes.updateUser:
      return {
        ...state,
        usersList: { ...state, ...payload },
      }
    case actionTypes.setUsers:
      return {
        ...state,
        usersList: [...payload],
      }
    default:
      throw new Error();
  }
}
