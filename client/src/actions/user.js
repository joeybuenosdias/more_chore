import axios from 'axios';

export const logout = () => {
  return (dispatch) => {
    axios.delete('/api/auth/sign_out')
      .then( () => dispatch(currentUser()))
  }
}

export const authenticate = (email, password, title, history) => {
  return (dispatch) => {
    let endpoint = title === 'Register' ? 'signup' : 'signin';
    axios.post(`/api/auth/${endpoint}`, {
      email, password
    })
    .then( user => {
      dispatch(currentUser(user))
      history.push('/dashboard')
    })
  }
}

export const tryFetchUser = (cb) => {
  return (dispatch) => {
    axios.get('/api/auth/user')
      .then( user => dispatch(currentUser(user)))
      .then(() => cb())
  }
}

const currentUser = (user={}) => {
  let info = user.data
  return { type: 'USER', user: info }
}
