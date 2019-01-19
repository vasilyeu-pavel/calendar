import { combineReducers } from 'redux';
import daysReducer from './daysReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    days: daysReducer,
    modal: modalReducer,
});
