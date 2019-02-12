export function photoReducer(state = [], action){
    switch (action.type) {
      case 'SHOW_PHOTO':
        return action.photo
      default:
        return state
    }
}
