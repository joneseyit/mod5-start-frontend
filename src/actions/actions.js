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
