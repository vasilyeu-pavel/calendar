import { SELECT_ITEM_HEIGHT, UPDATE_DAY, SUBMIT_EVENTS, CLOSE_MODAL } from '../constants.js';
import { createDayData, arrToMap, objToArr } from '../helpers';

export default function clientReducer(state = createDayData(), action) {
    switch (action.type) {

        case SELECT_ITEM_HEIGHT: {
            return state.map(item => ({
                ...item,
                height: action.payload,
            }));
        }
        case UPDATE_DAY: {
            const objState = arrToMap(state);
            objState[action.payload.dayId].update = true;
            return [...objToArr(objState)];
        }

        case CLOSE_MODAL: {
            const objState = arrToMap(state);
            objState[action.payload.dayId].update = false;
            return [...objToArr(objState)];
        }

        case SUBMIT_EVENTS: {
            const objState = arrToMap(state);
            objState[action.payload.dayId].update = false;
            objState[action.payload.dayId].date = action.payload.day;
            objState[action.payload.dayId].users = action.payload.users;
            objState[action.payload.dayId].events = action.payload.events;
            objState[action.payload.dayId].description = action.payload.description;
            return [...objToArr(objState)];
        }

        default:
            return state;
    }
}

