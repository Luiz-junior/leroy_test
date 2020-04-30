import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './styles.scss'
import { getProductsCart, addAllProdsCart as addAllProdsCartAction, subTotal, goCart as goCartAction } from '../../store/actions/cartAction'

let cart = []

function ProductsCart() {
  const dispatch = useDispatch()

  const { idProdsCart, changeSomething, productsAddedCart, goCart, allProdsCart } = useSelector(state => ({
    idProdsCart: state.cart.productsCart,
    changeSomething: state.cart.changeSomething,
    productsAddedCart: state.cart.productsAddedCart,
    goCart: state.cart.goCart,
    allProdsCart: state.cart.allProdsCart,
  }))

  const [QtdProdCart, setQtdProdCart] = useState(0)

  useEffect(() => {
    calcSubTotal(productsAddedCart)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, productsAddedCart, QtdProdCart])

  const calcSubTotal = productsAddedCart => {

    if (productsAddedCart.length > 0) {
      productsAddedCart.reduce((prevValue, currentValue) => {

      let a = (parseFloat(`${prevValue.price.to.integers}.${prevValue.price.to.decimals}`) * prevValue.qtdCart) + 
      (parseFloat(`${currentValue.price.to.integers}.${currentValue.price.to.decimals}`) * currentValue.qtdCart)
        
      console.log('sub', a)
      dispatch(subTotal(a))
      return a
      })
    }
  }

  useEffect(() => {
    dispatch(getProductsCart(idProdsCart))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeSomething])

  const onRemoveProdCart = (id) => { }

  const onAddProdCart = (id) => {
    productsAddedCart.filter((item, index) => {
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

  if (!productsAddedCart)
    return <strong>Não há produtos no carrinho :(</strong>

  return (
    <div className="productCart-Container">
      {/* {console.log("cart: ", cart)} */}
      {productsAddedCart.map((prod, i) => {
        let priceProd = parseFloat(`${prod.price.to.integers}.${prod.price.to.decimals}`)

        return (
          <div key={i} className="products-card">
            <hr className="line" />
            <div className="prod-card">
              <div className="prod-img-card">
                <img src={prod.picture} alt="Imagem produto" />
              </div>
              <div className="prod-card-info">
                <div className="prod-description">
                  <span className="prod-description-text">{prod.name}</span>
                </div>
                <div className="prod-qtd-value">
                  <div className="code-value">
                    <span>Cód. {prod.id} </span>
                    {/* <span className="">1 un. R$ 119,90</span> */}
                    {cart.length > 0 && cart[i] !== undefined
                      ? <span className="">{`${cart[i].qtdProCart}`} un. R$ {`${cart[i].totalProd}`}</span>
                      : <span className="">{prod.qtdCart} un. R$ {priceProd}</span>
                    }
                  </div>
                  <div className="section-select-qtd">
                    <div className="select-qtd">
                      <button className="btn-remove" onClick={() => onRemoveProdCart(prod.id)}>-</button>
                      <input className="input-value-qtd" type="text" value={prod.qtdCart} onChange={() => { }} />
                      <button className="btn-add" onClick={() => onAddProdCart(prod.id)}>+</button>
                    </div>

                    {cart.length > 0 && cart[i] !== undefined
                      ? <span className="qtd-value">{`${cart[i].qtdProCart}`} un. R$ {`${cart[i].totalProd}`}</span>
                      : <span className="qtd-value">{prod.qtdCart} un. R$ {priceProd}</span>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <hr className="dashed-line" />
    </div>
  )
}

export default ProductsCart
