export function photosReducer(state = [], action){
  switch (action.type) {
    case 'FETCHED_PHOTOS':
      return action.photos
    case 'ADD_PHOTO':
      debugger
      return [action.photo].concat(state)
    default:
      return state
  }
}
