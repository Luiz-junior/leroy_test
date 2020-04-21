import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import cart from '../../assets/img/cart.svg'
import logo from '../../assets/img/logo.svg'
import './styles.scss'

function Header() {

  const { qtdProdCart } = useSelector(state => ({
    qtdProdCart: state.cart.qtd
  }))

  useEffect(() => {
    setTimeout(() => {
      if (qtdProdCart > 0) {
        document.getElementById('section-message').style.visibility = 'visible'
        document.getElementById('section-message').style.opacity = 1
      }

      setTimeout(() => {
        document.getElementById('section-message').style.visibility = 'hidden'
        document.getElementById('section-message').style.opacity = 0
      }, 5000);
    }, 500);
  }, [qtdProdCart])

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

      <div className="section-message" id="section-message">
        <span className="text-message">Produto adicionado ao carrinho com sucesso!</span>
        <span className="close-message">X</span>
      </div>
    </div>
  )
}

export default Header
