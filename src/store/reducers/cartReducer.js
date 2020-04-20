
import { ADD_CART, ERROR } from '../actions/types';

const initialState = {
  productsCart: [],
  qtd: 0,
  error: ''
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, productsCart: [...state.productsCart, action.productsCart], qtd: action.qtd }
    default:
      return state;
  }
}

export default cartReducer