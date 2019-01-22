import { SET_MODAL_COORDS, CLOSE_MODAL } from '../constants.js';

export default function modalReducer(state = { left: null, top: null, isOpen: false }, action) {
    switch (action.type) {

        case SET_MODAL_COORDS: {
            return { ...action.payload, isOpen: !state.isOpen };
        }

        case CLOSE_MODAL: {
            return { ...state, isOpen: !state.isOpen };
        }

        default:
            return state;
    }
}
