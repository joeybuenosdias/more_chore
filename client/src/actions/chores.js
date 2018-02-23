import axios from 'axios';

export const getChores = () => {
  return (dispatch) => {
    axios.get('/api/chores')
      .then(res => dispatch({ type: 'CHORES', chores: res.data }))
  }
}

export const addChore = (chore) => {
  return (dispatch) => {
    let { title, description } = chore;
    axios.post('/api/chores', {
      title,
      description
    }).then( res => dispatch({ type: 'ADD_CHORE', chore: res.data }))
  }
}

export const deleteChore = (id) => {
  console.log(id)
  return (dispatch) => {
    axios.delete(`/api/chores/${id}`)
      .then( () => dispatch({ type: 'DELETE_CHORE', id }))
  }
}
