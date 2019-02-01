function checkUser(){
  return localStorage.username || null
}

export function userReducer(state = checkUser(), action){

  switch (action.type){
    case 'CURRENT_USER':
      return action.user
    case 'LOGOUT_USER':
      return localStorage.clear()
    default:
      return state
  }
}
