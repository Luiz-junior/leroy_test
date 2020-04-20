import { combineReducers } from 'redux'

import productsReducer from '../reducers/productsReducer'
import cartReducer from '../reducers/cartReducer'

const reducers = combineReducers({
  prods: productsReducer,
  cart: cartReducer
});

export default reducers