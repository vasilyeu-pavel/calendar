import { SELECT_ITEM_HEIGHT, SET_MODAL_COORDS, CLOSE_MODAL, SUBMIT_EVENTS, UPDATE_DAY } from "../constants"

export function selectItemHeight(height) {
  return {
    type: SELECT_ITEM_HEIGHT,
    payload: height,
  };
}

export function closeModal(dayId) {
  return {
    type: CLOSE_MODAL,
      payload: { dayId },
  };
}

export function setModalCoords(left, top) {
  return {
    type: SET_MODAL_COORDS,
    payload: { left, top },
  };
}

export function submitEvents(events = '', day = '', users = '', description= '', dayId) {
  return {
    type: SUBMIT_EVENTS,
    payload: { events, day, users, description, dayId },
  };
}

export function updateDay(dayId) {
  return {
    type: UPDATE_DAY,
    payload: { dayId },
  };
}
