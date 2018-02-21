const users = (state=[], action) => {
  switch(action.type){
    case 'USERS':
      return action.users;
    case 'SHOW_USER':
      return state.filter(user => user.id === action.id)
    default:
      return state
  }
}

export default users;
