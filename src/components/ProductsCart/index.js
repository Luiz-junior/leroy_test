import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './styles.scss'
import { getProductsCart } from '../../store/actions/cartAction'

function ProductsCart() {
  const dispatch = useDispatch()

  const [qtdProdCart, setQtdProdCart] = useState(1);

  const { idProdsCart, changeSomething } = useSelector(state => ({
    idProdsCart: state.cart.productsCart,
    changeSomething: state.cart.changeSomething
  }))

  // useSelector(state => console.log('news: ', state.cart.changeSomething)) 

  /* useEffect(() => {
    dispatch(getProductsCart(idProdsCart))
  }, [idProdsCart, dispatch]) */
  useEffect(() => {
    console.log('123')
    dispatch(getProductsCart(idProdsCart))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeSomething])

  const onRemoveProdCart = () => { setQtdProdCart(qtdProdCart - 1) }

  const onAddProdCart = () => { setQtdProdCart(qtdProdCart + 1) }

  if(!idProdsCart)
    return <strong>Não há produtos no carrinho :(</strong>

  return (
    <div className="productCart-Container">
      {idProdsCart.map((c, i) => {
        // console.log('c: ', c)
        return (
          <div key={i} className="products-card">
            <div className="prod-card">
              <div className="prod-img-card">
                <img src="#" alt="Imagem produto" />
              </div>
              <div className="prod-card-info">
                <div className="prod-description">
                  <span className="prod-description-text">Fita adesiva para demarcação 30 metros - Nove54</span>
                </div>
                <div className="prod-qtd-value">
                  <div className="code-value">
                    <span>Cód. 89031824 </span>
                    <span className="">1 un. R$ 119,90</span>
                  </div>
                  <div className="section-select-qtd">
                    <div className="select-qtd">
                      <button className="btn-remove" onClick={() => onRemoveProdCart()}>-</button>
                      <input className="input-value-qtd" type="text" value={qtdProdCart} onChange={() => { }} />
                      <button className="btn-add" onClick={() => onAddProdCart()}>+</button>
                    </div>
                    <span className="qtd-value">{1} un. R$ {"599,90"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      {/* <div className="products-card">
        <div className="prod-card">
          <div className="prod-img-card">
            <img src="#" alt="Imagem produto" />
          </div>
          <div className="prod-card-info">
            <div className="prod-description">
              <span className="prod-description-text">Fita adesiva para demarcação 30 metros - Nove54</span>
            </div>
            <div className="prod-qtd-value">
              <div className="code-value">
                <span>Cód. 89031824 </span>
                <span className="">1 un. R$ 119,90</span>
              </div>
              <div className="section-select-qtd">
                <div className="select-qtd">
                  <button className="btn-remove" onClick={() => onRemoveProdCart()}>-</button>
                  <input className="input-value-qtd" type="text" value={qtdProdCart} onChange={() => { }} />
                  <button className="btn-add" onClick={() => onAddProdCart()}>+</button>
                </div>
                <span className="qtd-value">{1} un. R$ {"599,90"}</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ProductsCart
