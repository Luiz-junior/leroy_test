
import api from '../../services/api';

import { ADD_CART, GET_PRODS_CART, CHANGE_SOMETHING, ERROR } from './types';

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


export const getProductsCart = (idProductsCart) => {
  return async dispatch => {
    idProductsCart.map(async id => {
      let res = await api.get(`/products/${id}`)

      console.log('res: ', res.data)

      try {
        dispatch({
          type: GET_PRODS_CART,
          productsAddedCart: res.data
        })
      } catch (error) {
        dispatch({ type: ERROR, errorStatus: error, loading: false })
      }
    })
  }
}

export const changeSomething = () => {
  return dispatch => {
    dispatch({
      type: CHANGE_SOMETHING,
      changeSomething: true,
    })
  }
}
