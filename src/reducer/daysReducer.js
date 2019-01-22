import {
    UPDATE_DAY, SUBMIT_EVENTS,
    CLOSE_MODAL, ADD_EVENTS,
    SEARCH_DAY,
    NEXT_MONTH,
    PREVIOUS_MONTH
} from '../constants.js';
import { getMonth, arrToMap, objToArr } from '../helpers';

const calendarState = {
    [`${new Date().getFullYear()}${new Date().getMonth()}`]: getMonth()
};

export default function clientReducer(state = calendarState, action) {
    switch (action.type) {
        case UPDATE_DAY: {
            const { currentMonth, currentYear } = action.payload;
            const objState = arrToMap(state[`${currentYear}${currentMonth}`]);
            objState[action.payload.dayId].update = true;
            return {
                ...state,
                [`${currentYear}${currentMonth}`]: objToArr(objState)
            };
        }

        case CLOSE_MODAL: {
            const { currentMonth, currentYear } = action.payload;
            const objState = arrToMap(state[`${currentYear}${currentMonth}`]);
            objState[action.payload.dayId].update = false;
            return {
                ...state,
                [`${currentYear}${currentMonth}`]: objToArr(objState)
            };
        }

        case SUBMIT_EVENTS: {
            const { dayId, day, users, events, description, currentMonth, currentYear } = action.payload;
            const objState = arrToMap(state[`${currentYear}${currentMonth}`]);
            objState[dayId].update = false;
            objState[dayId].date = day;
            objState[dayId].users = users;
            objState[dayId].events = events;
            objState[dayId].description = description;
            return {
                ...state,
                [`${currentYear}${currentMonth}`]: objToArr(objState)
            };
        }

        case ADD_EVENTS: {
            const { events, dayNumber, currentMonth, currentYear } = action.payload;
            return {
                ...state,
                [`${currentYear}${currentMonth}`]: state[`${currentYear}${currentMonth}`].map(day => {
                if (day.day && day.day.getDate() === dayNumber) {
                    day.update = false;
                    day.date = events.split(',')[0];
                    if (events.split(',')[1]) {
                        day.events = events.split(',')[1];
                    }
                    return day;
                }
                return day;
             })
            }
        }

        case SEARCH_DAY: {
            const { text, currentMonth, currentYear } = action.payload;
            if (text.length) {
                return {
                    ...state,
                    [`${currentYear}${currentMonth}`]: state[`${currentYear}${currentMonth}`].map(day => {
                        if (day.events.includes(text) || day.date.includes(text) || day.users.includes(text)) {
                            day.found = true;
                            return day;
                        }
                        day.found = false;
                        return day;
                    })
                };
            }
            return {
                ...state,
                [`${currentYear}${currentMonth}`]: state[`${currentYear}${currentMonth}`].map(day => {
                    day.found = false;
                    return day;
                 })
            }
        }

        case NEXT_MONTH: {
            const { currentMonth, currentYear } = action.payload;
            if (!state[`${currentYear}${currentMonth}`]) {
                return {
                    ...state,
                    [`${currentYear}${currentMonth}`]: getMonth(currentYear, currentMonth)
                }
            } else return state;
        }

        case PREVIOUS_MONTH: {
            const { currentMonth, currentYear } = action.payload;
            if (!state[`${currentYear}${currentMonth}`]) {
                return {
                    ...state,
                    [`${currentYear}${currentMonth}`]: getMonth(currentYear, currentMonth)
                }
            } else return state;
        }

        default:
            return state;
    }
}

