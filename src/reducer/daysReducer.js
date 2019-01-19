import { SELECT_ITEM_HEIGHT } from '../constants.js';
import { createDayData } from '../helpers';

export default function clientReducer(state = createDayData(), action) {
  switch (action.type) {

    case SELECT_ITEM_HEIGHT: {
      return state.map(item => ({
          ...item,
          height: action.payload,
      }));
    }

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

