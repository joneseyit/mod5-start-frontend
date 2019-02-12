import { combineReducers } from 'redux'
import { photosReducer } from './photosReducer'
import { userReducer } from './userReducer'
import { locationReducer } from './locationReducer'
import { photoReducer } from './photoReducer'

export default combineReducers({
  user: userReducer,
  photos: photosReducer,
  photo: photoReducer,
  location: locationReducer
})
