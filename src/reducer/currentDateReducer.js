import { PREVIOUS_MONTH, NEXT_MONTH } from "../constants";

const calendarState = {
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
};

export default function currentDateReducer(state = calendarState, action) {
    switch (action.type) {
        case NEXT_MONTH: {
            return {
                currentMonth: action.payload.currentMonth,
                currentYear: action.payload.currentYear,
            };
        }
        case PREVIOUS_MONTH: {
            return {
                currentMonth: action.payload.currentMonth,
                currentYear: action.payload.currentYear,
            };
        }
        default:
            return state;
    }
}
