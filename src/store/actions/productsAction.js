
import api from '../../services/api';

import { GET_PRODUCTS, ERROR } from './types';

export const getProducts = () => {
  return async dispatch => {
    const res = await api.get(`/products`)

    try {
      dispatch({
        type: GET_PRODUCTS,
        products: res.data,
        loading: false
      })
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: res.data, loading: false })
    }
  }
}
