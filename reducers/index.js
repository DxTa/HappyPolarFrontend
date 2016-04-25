import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { default as user } from './user'
import { default as exercises } from './exercises'
import { default as sessions } from './sessions'

export default combineReducers({
  routing,
  user,
  exercises,
  sessions
})
