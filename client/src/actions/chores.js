import axios from 'axios';

export const getChores = (cb) => {
  return (dispatch) => {
    axios.get('/api/chores')
      .then(res => dispatch({ type: 'CHORES', chores: res.data }))
      .then( cb() )
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

export const updateChore = (chore) => {
  return (dispatch) => {
    let { title, description, completed } = chore;
    axios.put(`/api/chores/${chore._id}`, {
      title,
      description,
      completed
    })
    .then( res => dispatch({ type: 'UPDATE_CHORE', chore: res.data }))
  }
}

export const deleteChore = (id) => {
  return (dispatch) => {
    axios.delete(`/api/chores/${id}`)
      .then( () => dispatch({ type: 'DELETE_CHORE', id }))
  }
}
