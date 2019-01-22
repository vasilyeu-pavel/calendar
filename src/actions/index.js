import {
  SET_MODAL_COORDS,
    CLOSE_MODAL,
    SUBMIT_EVENTS,
    UPDATE_DAY,
    ADD_EVENTS,
    SEARCH_DAY,
    PREVIOUS_MONTH,
    NEXT_MONTH,
    UPDATE_CURRENT_STATE
} from "../constants"

export function closeModal(dayId, currentMonth, currentYear) {
  return {
    type: CLOSE_MODAL,
      payload: { dayId, currentMonth, currentYear },
  };
}

export function setModalCoords(left, top, currentMonth, currentYear) {
  return {
    type: SET_MODAL_COORDS,
    payload: { left, top, currentMonth, currentYear },
  };
}

export function submitEvents(events = '', day = '', users = '', description= '', dayId, currentMonth, currentYear) {
  return {
    type: SUBMIT_EVENTS,
    payload: { events, day, users, description, dayId, currentMonth, currentYear },
  };
}

export function updateDay(dayId, currentYear, currentMonth) {
  return {
    type: UPDATE_DAY,
    payload: { dayId, currentYear, currentMonth },
  };
}

export function addEvents(dayNumber, events, currentMonth, currentYear) {
  return {
    type: ADD_EVENTS,
    payload: { dayNumber, events, currentMonth, currentYear },
  };
}

export function searchDay(text, currentMonth, currentYear) {
  return {
    type: SEARCH_DAY,
    payload: { text, currentMonth, currentYear },
  };
}

export function nextMonth(currentMonth, currentYear) {
  return {
    type: NEXT_MONTH,
    payload: {
          currentYear: (currentMonth === 11) ? currentYear + 1 : currentYear,
          currentMonth: (currentMonth + 1) % 12,
      }
  };
}

export function previousMonth(currentMonth, currentYear) {
  return {
    type: PREVIOUS_MONTH,
    payload: {
          currentYear: (currentMonth === 0) ? currentYear - 1 : currentYear,
          currentMonth: (currentMonth === 0) ? 11 : currentMonth - 1,
      }
  };
}

export function updateCurrentState() {
    return {
        type: UPDATE_CURRENT_STATE,
        payload: {
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth(),
            currentDay: new Date().getDate(),
        }
    };
}



