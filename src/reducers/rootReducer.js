import { combineReducers } from 'redux'
import { photosReducer } from './photosReducer'
import { userReducer } from './userReducer'

export default combineReducers({
  user: userReducer,
  photos: photosReducer,
  photo: photosReducer
})
