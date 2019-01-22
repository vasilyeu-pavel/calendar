import { PREVIOUS_MONTH, NEXT_MONTH, UPDATE_CURRENT_STATE } from "../constants";

const calendarState = {
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    currentDay: null,
};

export default function currentDateReducer(state = calendarState, action) {
    switch (action.type) {
        case NEXT_MONTH: {
            return {
                currentMonth: action.payload.currentMonth,
                currentYear: action.payload.currentYear,
                currentDay: null,
            };
        }
        case PREVIOUS_MONTH: {
            return {
                currentMonth: action.payload.currentMonth,
                currentYear: action.payload.currentYear,
                currentDay: null,
            };
        }

        case UPDATE_CURRENT_STATE: {
            return {
                currentMonth: action.payload.currentMonth,
                currentYear: action.payload.currentYear,
                currentDay: action.payload.currentDay,
            };
        }
        default:
            return state;
    }
}
