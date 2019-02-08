//action creator

export function fetchedPhotos(photos) {
  console.log("inside fetched photos")
  return { type: 'FETCHED_PHOTOS', photos: photos}
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

export function showPhoto(photo) {
  return { type: 'SHOW_PHOTO', photo: photo }
}
