const chores = (state=[], action) => {
  switch(action.type){
    case 'CHORES':
      return action.chores
    case 'ADD_CHORE':
      return [ action.chore, ...state ]
    case 'UPDATE_CHORE':
      return state.map( chore => {
        if(chore._id === action.chore._id)
          return action.chore
        return chore
      })
    case 'DELETE_CHORE':
      return state.filter( ch => ch._id !== action.id)
    default:
      return state
  }
}

export default chores;
