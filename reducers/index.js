import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { default as user } from './user'

export default combineReducers({
  routing,
  user
})
