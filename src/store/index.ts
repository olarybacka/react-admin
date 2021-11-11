import { createStore, combineReducers } from 'redux'
import { usersReducer } from 'components/Dashboard/reducer'


export const store = createStore(combineReducers(
  usersReducer
))
