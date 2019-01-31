export function photoReducer(state, action){
  switch (action.ype) {
    case 'FETCHED_PHOTOS':
      return action.photos
    default:
      return state
  }
}
