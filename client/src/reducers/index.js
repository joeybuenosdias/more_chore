//LIBRARIES
import { combineReducers } from 'redux';

//FILES
import users from './users';
import user from './user';
import chores from './chores';

const rootReducer = combineReducers({
  users,
  user,
  chores
});

export default rootReducer;
