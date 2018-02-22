const chores = (state=[], action) => {
  switch(action.type){
    case 'CHORES':
      return action.chores
    default:
      return state
  }
}

export default chores;
