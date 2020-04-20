
import api from '../../services/api';

import { ADD_CART, ERROR } from './types';

export const addCart = (productsCart, qtd) => {
  return async dispatch => {
    // const res = await api.get(`/cart`)
    /* console.log(productsCart) */

    try {
      dispatch({
        type: ADD_CART,
        productsCart,
        qtd: qtd + 1
      })
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: error, loading: false })
    }
  }
}
