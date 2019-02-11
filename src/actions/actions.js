//action creator

export function fetchedPhotos(photos) {
  return { type: 'FETCHED_PHOTOS', photos: photos}
}

export function test(string) {
  return { type: 'ADD_TO_STORE', string: string }
}

export function addUser(user){
  return { type: 'CURRENT_USER', user: user}
}

export function logoutUser(){
  return { type: 'LOGOUT_USER'}
}

export function addPhoto(photo){
  return {type: 'ADD_PHOTO', photo: photo }
}

export function getLocation(location){
  debugger
      return { type: 'GET_LOCATION', location: {lat: location.coords.latitude, lng: location.coords.longitude } }
}
