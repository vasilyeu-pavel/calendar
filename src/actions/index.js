import { SELECT_ITEM_HEIGHT, SET_MODAL_COORDS, CLOSE_MODAL } from "../constants"

export function selectItemHeight(height) {
  return {
    type: SELECT_ITEM_HEIGHT,
    payload: height,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

export function setModalCoords(left, top) {
  return {
    type: SET_MODAL_COORDS,
    payload: { left, top },
  };
}
