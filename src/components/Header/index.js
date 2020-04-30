import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import logo from '../../assets/img/logo.svg'
import SideNav from '../SideNav'
import './styles.scss'

function Header() {
  const dispatch = useDispatch()

  const [visibility, setVisibility] = useState('')
  const [opacity, setOpacity] = useState(0)
  const [width, setWidth] = useState('')  

  const { qtdProdCart } = useSelector(state => ({
    qtdProdCart: state.cart.qtd
  }))

  useEffect(() => {
    setTimeout(() => {
      if (qtdProdCart > 0) {
        setVisibility('visible')
        setOpacity(1)
      }

      setTimeout(() => {
        setVisibility('hidden')
        setOpacity(0)
      }, 5000);
    }, 500);
  }, [qtdProdCart])

  return (
    <>
      <div className="header-container" id="header-container">
        <div className="header-section">
          <img src={logo} alt="Logo" className="logo-icon" />
          <h1 className="title">Os melhores produtos</h1>
        </div>

        <div className="section-message" id="section-message" style={{ visibility, opacity }}>
        {/* <div className="section-message" id="section-message"> */}
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
