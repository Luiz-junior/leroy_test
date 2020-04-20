import React from 'react'
import { useSelector } from 'react-redux'

import cart from '../../assets/img/cart.svg'
import logo from '../../assets/img/logo.svg'
import './styles.scss'

function Header() {

  const { qtdProdCart } = useSelector(state => ({
    qtdProdCart: state.cart.qtd
  }))

  return (
    <div className="header-container">
      <div className="header-section">
        <img src={logo} alt="Logo" className="logo-icon" />
        <h1 className="title">Os melhores produtos</h1>
        <div className="section-cart">
          <img src={cart} alt="" className="cart-icon" />
          <strong className="qtd-prod">{qtdProdCart}</strong>
        </div>
      </div>
    </div>
  )
}

export default Header
