import React from 'react'

import './styles.scss'
import ProductsCart from '../ProductsCart'

function SideNav() {

  const onCloseNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mainApp").style.marginLeft = "0";
    document.body.style.backgroundColor = "#fff";
  }

  return (
    <div className="sidenav-container">
      <div id="mySidenav" className="sidenav">
        <section className="section-top">
          <a href="#" className="close-btn" onClick={() => onCloseNav()} >&times;</a>
          <span className="top-text">Produtos no carrinho</span>
        </section>

        <section className="section-freight">
          <input type="text" className="freight-input" onChange={() => { }} placeholder="Calcular CEP" />
        </section>

        <section className="section-content">
          <ProductsCart />
        </section>

        <section className="section-subtotal">
          <div className="total-freight">
            <span className="freight-text">Frete</span>
            <span className="freight-value">-</span>
          </div>
          <div className="subtotal">
            <strong className="subtotal-text">Subtotal</strong>
            <strong className="subtotal-value">R$ 3.081,70</strong>
          </div>
          <div className="go-cart">
            <button className="btn-go-cart">Ir para o carrinho</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SideNav
