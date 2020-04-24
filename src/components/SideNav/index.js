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
          <hr className="line" />
          <ProductsCart />
          <hr className="line" />
        </section>
      </div>
    </div>
  )
}

export default SideNav
