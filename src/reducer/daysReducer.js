import { } from '../constants.js';
import { createDayData } from '../helpers';

export default function clientReducer(state = createDayData(), action) {
  switch (action.type) {

    // case TOGGLE_FORM_STATE:
    // return state
    // 	.set('formIsOpen', !state.get('formIsOpen'))
    // 	.set('selectedId', null);

    default:
      return state;
  }
}

// function arrToMap(arr) {
// 	let obj = arr.reduce(function(map, obj) {
// 	    map[obj.id] = obj;
// 	    return map;
// 	}, {});
// 	return obj
// }

