import { SELECT_ITEM_HEIGHT, UPDATE_DAY, SUBMIT_EVENTS, CLOSE_MODAL, ADD_EVENTS, SEARCH_DAY } from '../constants.js';
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
            return objToArr(objState);
        }

        case CLOSE_MODAL: {
            const objState = arrToMap(state);
            objState[action.payload.dayId].update = false;
            return objToArr(objState);
        }

        case SUBMIT_EVENTS: {
            const { dayId, day, users, events, description } = action.payload;
            const objState = arrToMap(state);
            objState[dayId].update = false;
            objState[dayId].date = day;
            objState[dayId].users = users;
            objState[dayId].events = events;
            objState[dayId].description = description;
            return objToArr(objState);
        }

        case ADD_EVENTS: {
            const { events, dayNumber } = action.payload;
            return state.map(day => {
                if (day.day && day.day.getDate() === dayNumber) {
                    day.update = false;
                    day.date = events.split(',')[0];
                    if (events.split(',')[1]) {
                        day.events = events.split(',')[1];
                    }
                    return day;
                }
                return day;
            });
        }

        case SEARCH_DAY: {
            const { text } = action.payload;
            if (text.length) {
                return state.map(day => {
                    if (day.events.includes(text) || day.date.includes(text) || day.users.includes(text)) {
                        day.found = true;
                        return day;
                    }
                    day.found = false;
                    return day;
                });
                return state;
            }
            return state.map(day => {
                day.found = false;
                return day;
            });
        }

        default:
            return state;
    }
}

