import axios from 'axios';

export const getChores = () => {
  return (dispatch) => {
    axios.get('/api/chores')
      .then(res => dispatch({ type: 'CHORES', chores: res.data }))
  }
}
