function checkUser(){
  return localStorage.username || null
}

export default function userReducer(state = checkUser(), action){
  switch (action.type){
    case 'CURRENT_USER':
      return action.user
    default:
      return state
  }
}
