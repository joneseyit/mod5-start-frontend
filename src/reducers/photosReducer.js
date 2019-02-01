export function photosReducer(state = [], action){
  switch (action.type) {
    case 'FETCHED_PHOTOS':
      return action.photos
    default:
      return state
  }
}
