//action creator

export function fetchedPhotos = (photos) => {
  return { type: 'FETCHED_PHOTOS', photos: photos}
}
