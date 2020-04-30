import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './styles.scss'
import ProductsCart from '../ProductsCart'
import { goCart } from '../../store/actions/cartAction'

function SideNav(props) {
  const dispatch = useDispatch()

  const [width, setWidth] = useState();
  const [marginLeft, setMarginLeft] = useState();

  const { subtotal, qtdProdCart } = useSelector(state => ({
    subtotal: state.cart.subtotal,
    qtdProdCart: state.cart.qtd
  }))

  const onCloseNav = () => {
    // setWidth(0);
    // document.getElementById("sidenav").style.width = "0";
    // document.getElementById("header-container").style.background = "#78be20";
    document.body.style.backgroundColor = "#fff";
  }

  const onGoCart = () => { dispatch(goCart()) }

  return (
    <div className="sidenav-container">
      <div id="mySidenav" className="sidenav" /* style={{ width }} */>
        <div className="teste-1">
          <section className="section-top">
            <button className="close-btn" onClick={() => onCloseNav()} >&times;</button>
            <span className="top-text">Produtos no carrinho</span>
          </section>

          <section className="section-freight">
            <input type="text" className="freight-input" onChange={() => { }} placeholder="Calcular CEP" />
          </section>

          <section className="section-content">
            <ProductsCart />
          </section>
        </div>

        <section className="section-subtotal">
          <div className="total-freight">
            <span className="freight-text">Frete</span>
            <span className="freight-value">-</span>
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
