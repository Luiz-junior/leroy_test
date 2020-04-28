import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import cart from '../../assets/img/cart.svg'
import logo from '../../assets/img/logo.svg'
import SideNav from '../SideNav'
import './styles.scss'
import { changeSomething } from '../../store/actions/cartAction'

function Header() {
  const dispatch = useDispatch()

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

  const onOpenNav = () => {
    document.getElementById("mySidenav").style.width = "375px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    dispatch(changeSomething())
  }

  return (
    <>
      <div className="header-container">
        <div className="header-section">
          <img src={logo} alt="Logo" className="logo-icon" />
          <h1 className="title">Os melhores produtos</h1>
          <div className="section-cart" onClick={() => onOpenNav()}>
            <img src={cart} alt="" className="cart-icon" />
            <strong className="qtd-prod">{qtdProdCart}</strong>
          </div>
        </div>

        <div className="section-message" id="section-message">
        {/* <div className={`section-message ${qtdProdCart > 0 ? style.visibility: 'visible'}`} id="section-message"> */}
          <span className="text-message">Produto adicionado ao carrinho com sucesso!</span>
          <span className="close-message">X</span>
        </div>
      </div>
      <SideNav />
    </>
  )
}

export default Header
