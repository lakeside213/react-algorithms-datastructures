import { SET_ORDER } from './types';

const orderReducer = (state = { order: "ascending" }, action) => {
    switch (action.type) {
      case SET_ORDER:
        return  {...state, order : action.payload};
      default:
        return state
    }
  }
  
  export default orderReducer