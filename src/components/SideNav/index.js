import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './styles.scss'
import ProductsCart from '../ProductsCart'
import { goCart, calcFreight, changeSideNav } from '../../store/actions/cartAction'

function SideNav(props) {
  const dispatch = useDispatch()

  const { subtotal, qtdProdCart, freight, sidenav } = useSelector(state => ({
    subtotal: state.cart.subtotal,
    qtdProdCart: state.cart.qtd,
    freight: state.cart.freight.freight,
    sidenav: state.cart.sidenav
  }))

  const onCloseNav = () => { dispatch(changeSideNav({display: 'none', width: 0})) }

  const onGoCart = () => { dispatch(goCart()) }

  const onCalcFreight = (cep) => dispatch(calcFreight(cep))

  return (
    <div className="sidenav-container">
      <div id="mySidenav" className="sidenav" style={{ width: sidenav.width }}>
        <div className="teste-1">
          <section className="section-top">
            <button className="close-btn" onClick={() => onCloseNav()} >&times;</button>
            <span className="top-text">Produtos no carrinho</span>
          </section>

          <section className="section-freight">
            <input type="text" className="freight-input" onBlur={(e) => onCalcFreight(e.target.value)} placeholder="Calcular CEP" />
          </section>

          <section className="section-content">
            <ProductsCart />
          </section>
        </div>

        <section className="section-subtotal">
          <div className="total-freight">
            <span className="freight-text">Frete</span>
            <span className="freight-value">{!freight ? '-' : freight}</span>
          </div>
          <div className="subtotal">
            <strong className="subtotal-text">Subtotal</strong>
            {subtotal !== 0
              ? <strong className="subtotal-value">R$ {subtotal}</strong>
              : <strong className="subtotal-value">R$ {0}</strong>
            }
          </div>
          <div className="go-cart">
            <button className="btn-go-cart" onClick={() => onGoCart()}>Ir para o carrinho</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SideNav
