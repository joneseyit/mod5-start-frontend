const defaultState = {

}

export function locationReducer(state = defaultState, action){
  switch (action.type) {
    case 'GET_LOCATION':
      return { lat: action.location.lat, lng: action.location.lng}
    default:
      return state
  }
}
