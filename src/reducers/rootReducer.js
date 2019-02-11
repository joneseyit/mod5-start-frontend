import { combineReducers } from 'redux'
import { photosReducer } from './photosReducer'
import { userReducer } from './userReducer'
import { locationReducer } from './locationReducer'

export default combineReducers({
  user: userReducer,
  photos: photosReducer,
  photo: photosReducer,
  location: locationReducer
})
