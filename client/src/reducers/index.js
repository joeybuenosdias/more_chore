//LIBRARIES
import { combineReducers } from 'redux';

//FILES
import users from './users';
import user from './user';

const rootReducer = combineReducers({
  users,
  user
});

export default rootReducer;
