import { combineReducers } from 'redux'
import { photosReducer } from './photosReducer'
import {userReducer, logoutReducer} from './userReducer'

export default combineReducers({
  user: userReducer,
  photos: photosReducer
})
