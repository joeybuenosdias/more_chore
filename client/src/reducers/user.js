const user = (state={}, action) => {
  switch(action.type){
    case 'SHOW_USER':
      return action.user
    default:
      return state
  }
}

export default user;
