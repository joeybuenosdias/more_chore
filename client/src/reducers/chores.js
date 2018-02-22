const chores = (state=[], action) => {
  switch(action.type){
    case 'CHORES':
      return action.chores
    case 'ADD_CHORE':
      return [ action.chore, ...state ]
    default:
      return state
  }
}

export default chores;
