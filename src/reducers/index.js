import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  contactReducer: contactReducer,
  modal: modalReducer,
});

export default rootReducer;