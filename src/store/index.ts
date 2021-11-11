import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { usersReducer, UserState } from 'components/Dashboard/reducer'

export type RootState = {
  users: UserState
}

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'InterviewerUI',
      })
    : compose

export const store = createStore(
  combineReducers({ users: usersReducer }),
  composeEnhancers(applyMiddleware(thunk)),
)
