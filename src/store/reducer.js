import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import orderReducer from "./order/reducer";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  order: orderReducer
})
export default createRootReducer