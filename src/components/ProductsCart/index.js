import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './styles.scss'
import { getProductsCart } from '../../store/actions/cartAction'

function ProductsCart() {
  const dispatch = useDispatch()

  const [qtdProdCart, setQtdProdCart] = useState(1);

  const { idProdsCart, changeSomething, productsAddedCart } = useSelector(state => ({
    idProdsCart: state.cart.productsCart,
    changeSomething: state.cart.changeSomething,
    productsAddedCart: state.cart.productsAddedCart
  }))

  useEffect(() => {
    dispatch(getProductsCart(idProdsCart))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeSomething])

  const onRemoveProdCart = (id) => {
    setQtdProdCart(qtdProdCart - 1)
  }

  const onAddProdCart = (id) => {
    let a = productsAddedCart.filter((item, index) => {
      /* if (item.id === id) {
         setQtdProdCart(qtdProdCart + 1)
        productsAddedCart.push({qtdCart: qtdProdCart + 1})
        console.log('a: ', productsAddedCart)
      } */
      return item.id === id
    })

    a.push({ qtdCart: qtdProdCart + 1 })
    console.log('a: ', a)
  }

  if (!productsAddedCart)
    return <strong>Não há produtos no carrinho :(</strong>

  return (
    <div className="productCart-Container">
      {productsAddedCart.map((prod, i) => {
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
                    <span className="">1 un. R$ 119,90</span>
                  </div>
                  <div className="section-select-qtd">
                    <div className="select-qtd">
                      <button className="btn-remove" onClick={() => onRemoveProdCart(prod.id)}>-</button>
                      <input className="input-value-qtd" type="text" value={qtdProdCart} onChange={() => { }} />
                      <button className="btn-add" onClick={() => onAddProdCart(prod.id)}>+</button>
                    </div>
                    <span className="qtd-value">{1} un. R$ {"599,90"}</span>
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
