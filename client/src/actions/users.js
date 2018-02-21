import axios from 'axios';

export const getUsers = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => dispatch({ type: 'USERS', users: res.data }))
  }
}

export const showUser = (id) => {
  return {type: 'SHOW_USER', id}
}
