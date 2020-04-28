
import { ADD_CART, GET_PRODS_CART, CHANGE_SOMETHING, GO_CART, ADD_ALL_PROD_CART, SUBTOTAL } from '../actions/types';

const initialState = {
  productsCart: [],
  productsAddedCart: [],
  qtd: 0,
  allProdsCart: [],
  changeSomething: false,
  goCart: false,
  subtotal: 0,
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
    case GO_CART:
      return { ...state, goCart: action.goCart }
    case ADD_ALL_PROD_CART:
      return { ...state, allProdsCart: action.allProdsCart }
    case SUBTOTAL:
      return { ...state, subtotal: action.subtotal }
    default:
      return state;
  }
}

export default cartReducer