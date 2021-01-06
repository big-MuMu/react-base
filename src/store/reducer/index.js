import { combineReducers } from 'redux';
import { todoReducer } from './todo';
import { userReducer } from './user';
// import { combineReducers } from '../../redux/combineReducers';

export default combineReducers({
    todoReducer,
    userReducer
});