export function photosReducer(state = [], action){
  switch (action.type) {
    case 'FETCHED_PHOTOS':
      return action.photos
    case 'ADD_PHOTO':
      return [action.photo].concat(state)
    case 'SHOW_PHOTO':
      return action.photo
    default:
      return state
  }
}
