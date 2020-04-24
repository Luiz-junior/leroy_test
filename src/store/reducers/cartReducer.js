
import { ADD_CART, GET_PRODS_CART, CHANGE_SOMETHING, ERROR } from '../actions/types';

const initialState = {
  productsCart: [],
  productsAddedCart: [],
  qtd: 0,
  changeSomething: false,
  error: ''
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, productsCart: [...state.productsCart, action.productsCart], qtd: action.qtd }
    case GET_PRODS_CART:
      return { ...state, productsAddedCart: [...state.productsAddedCart, action.productsAddedCart] }
    case CHANGE_SOMETHING:
      return { ...state, changeSomething: action.changeSomething }
    default:
      return state;
  }
}

export default cartReducer