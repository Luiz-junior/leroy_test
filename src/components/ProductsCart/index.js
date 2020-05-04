import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ProdCard, ProdImgCard, ProdCardInfo } from './styles'
import {
  getProductsCart,
  addAllProdsCart as addAllProdsCartAction,
  subTotal,
  goCart as goCartAction
} from '../../store/actions/cartAction'

let cart = []

function ProductsCart() {
  const dispatch = useDispatch()

  /* const { idProdsCart, products, changeSomething, productsAddedCart, goCart, allProdsCart } = useSelector(state => ({
    idProdsCart: state.cart.productsCart,
    products: state.prods.products,
    changeSomething: state.cart.changeSomething,
    productsAddedCart: state.cart.productsAddedCart,
    goCart: state.cart.goCart,
    allProdsCart: state.cart.allProdsCart,
  })) */

  const { idProdsCart, products, changeSomething, goCart } = useSelector(state => ({
    idProdsCart: state.cart.productsCart,
    products: state.prods.products,
    changeSomething: state.cart.changeSomething,
    goCart: state.cart.goCart,
    allProdsCart: state.cart.allProdsCart,
  }))

  const [QtdProdCart, setQtdProdCart] = useState(0)
  const [prodsCart, setProdsCart] = useState(0)

  useEffect(() => {
    calcSubTotal(prodsCart)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, prodsCart, QtdProdCart])

  const calcSubTotal = prodsCart => {
    if (prodsCart.length > 0) {
      let total = prodsCart.reduce((prev, curr) =>
        prev + parseFloat(`${curr.price.to.integers}.${curr.price.to.decimals}`) * curr.qtdCart, 0)

      dispatch(subTotal(total))
    }
  }

  useEffect(() => {
    // ADD PRODUCTS IN CART
    let added = [];

    idProdsCart.map(id => {
      let prodsAdded = products.filter(prod => {
        if (prod.id === id)
          return prod.id === id
      })

      added.push(...prodsAdded)
      return added
    })

    if (added.length > 0) {
      added.map(item => { item.qtdCart = 1 })
      setProdsCart(added)
    }
    // dispatch(getProductsCart(idProdsCart))
    if (prodsCart.length > 0) { cart.push(...prodsCart) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeSomething])

  const onRemoveProdCart = (id, i) => {
    /* prodsCart.filter((item, index) => {
      let price = parseFloat(`${item.price.to.integers}.${item.price.to.decimals}`)
      let totalProd = price * item.qtdCart

      if (item.id === id) {
        item.qtdCart = item.qtdCart - 1
        cart[index] = { id, qtdProCart: item.qtdCart, totalProd }
        console.log('cArttt: ', cart)
        if (item.qtdCart < 1) {

        }
      }
    }) */
  }

  const onAddProdCart = (id) => {
    prodsCart.filter((item, index) => {
      if (item.id === id) {
        item.qtdCart = item.qtdCart + 1
        let price = parseFloat(`${item.price.to.integers}.${item.price.to.decimals}`)
        let totalProd = price * item.qtdCart

        if (cart.length === 0)
          cart = [{ id, qtdProCart: item.qtdCart, totalProd }]
        else {
          if (cart.length === 1 && cart[0].id !== id) {
            cart.push({ id, qtdProCart: item.qtdCart, totalProd })
          } else
            cart[index] = { id, qtdProCart: item.qtdCart, totalProd }
        }
      }

      setQtdProdCart(QtdProdCart + 1)
      dispatch(addAllProdsCartAction(cart))
      dispatch(goCartAction(goCart))
    })
  }

  if (!prodsCart)
    return <strong>Não há produtos no carrinho :(</strong>

  return (
    <div className="productcart-container">
      {prodsCart.map((prod, i) => {
        let priceProd = parseFloat(`${prod.price.to.integers}.${prod.price.to.decimals}`)

        return (
          <div key={i} className="products-card">
            <hr className="line" />
            <ProdCard>
              <ProdImgCard>
                <img src={prod.picture} alt="Imagem produto" />
              </ProdImgCard>
              <ProdCardInfo>
                <div className="prod-description">
                  <span className="prod-description-text">{prod.name}</span>
                </div>
                <div className="prod-qtd-value">
                  <div className="code-value">
                    <span>Cód. {prod.id} </span>
                    {cart.length > 0 && cart[i] !== undefined
                      ? <span className="">{`${cart[i].qtdProCart}`} un. R$ {`${cart[i].totalProd.toFixed(2)}`}</span>
                      : <span className="">{prod.qtdCart} un. R$ {priceProd.toFixed(2)}</span>
                    }
                  </div>
                  <div className="section-select-qtd">
                    <div className="select-qtd">
                      <button className="btn-remove" onClick={() => onRemoveProdCart(prod.id, i)}>-</button>
                      <input className="input-value-qtd" type="text" value={prod.qtdCart} onChange={() => { }} />
                      <button className="btn-add" onClick={() => onAddProdCart(prod.id)}>+</button>
                    </div>

                    {cart.length > 0 && cart[i] !== undefined
                      ? <span className="qtd-value">{`${cart[i].qtdProCart}`} un. R$ {`${cart[i].totalProd.toFixed(2)}`}</span>
                      : <span className="qtd-value">{prod.qtdCart} un. R$ {priceProd.toFixed(2)}</span>
                    }
                  </div>
                </div>
              </ProdCardInfo>
            </ProdCard>
          </div>
        )
      })}
      <hr className="dashed-line" />
    </div>
  )
}

export default ProductsCart
