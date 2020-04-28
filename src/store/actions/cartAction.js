
import api from '../../services/api';

import { ADD_CART, GET_PRODS_CART, CHANGE_SOMETHING, GO_CART, ERROR, ADD_ALL_PROD_CART, CALC_SUBTOTAL, SUBTOTAL } from './types';

export const addCart = (productsCart, qtd) => {
  return dispatch => {
    dispatch({ type: ADD_CART, productsCart, qtd: qtd + 1 })
  }
}

export const getProductsCart = (idProductsCart) => {
  return async dispatch => {
    idProductsCart.map(async id => {
      let res = await api.get(`/products/${id}`)

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
      changeSomething: true
    })
  }
}

export const goCart = (go) => {
  return dispatch => {
    dispatch({ type: GO_CART, goCart: go ? !go : go })
  }
}

export const addAllProdsCart = (cart) => {
  return dispatch => {
    dispatch({ type: ADD_ALL_PROD_CART, allProdsCart: cart })
  }
}

export const subTotal = (subtotal) => {
  return dispatch => {
    dispatch({ type: SUBTOTAL, subtotal })
  }
}