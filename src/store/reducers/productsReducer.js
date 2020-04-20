
import { GET_PRODUCTS, ERROR } from '../actions/types';

const initialState = {
  products: [],
  loading: true,
  error: ''
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products, loading: action.loading }
    default:
      return state;
  }
}

export default productsReducer