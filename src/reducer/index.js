import { combineReducers } from 'redux';
import daysReducer from './daysReducer';
import modalReducer from './modalReducer';
import currentDateReducer from './currentDateReducer';

export default combineReducers({
    days: daysReducer,
    modal: modalReducer,
    currentDate: currentDateReducer,
});
