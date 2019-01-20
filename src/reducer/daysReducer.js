import { SELECT_ITEM_HEIGHT, UPDATE_DAY, SUBMIT_EVENTS, CLOSE_MODAL, ADD_EVENTS } from '../constants.js';
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
            const { dayId, day, users, events, description } = action.payload;
            const objState = arrToMap(state);
            objState[dayId].update = false;
            objState[dayId].date = day;
            objState[dayId].users = users;
            objState[dayId].events = events;
            objState[dayId].description = description;
            return [...objToArr(objState)];
        }

        case ADD_EVENTS: {
            const { events, dayNumber } = action.payload;
            const objState = arrToMap(state);
            objState[dayNumber].update = false;
            objState[dayNumber].date = events.split(',')[0];
            if (events.split(',')[1]) {
                objState[dayNumber].events = events.split(',')[1];
            }
            return [...objToArr(objState)];
        }

        default:
            return state;
    }
}

