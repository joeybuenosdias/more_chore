const chores = (state=[], action) => {
  switch(action.type){
    case 'CHORES':
      return action.chores
    case 'ADD_CHORE':
      return [ action.chore, ...state ]
    case 'DELETE_CHORE':
      return state.filter( ch => ch._id !== action.id)
    default:
      return state
  }
}

export default chores;
