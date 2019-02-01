function checkUser(){
  return localStorage.username || null
}

export function userReducer(state = checkUser(), action){
  switch (action.type){
    case 'CURRENT_USER':
      return action.user
    default:
      return state
  }
}

export function logoutReducer(state = localStorage.username, action){
  switch (action.type) {
    case 'LOGOUT_USER':
      return localStorage.clear()
    default:
      return state
  }
}
