import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import logo from '../../assets/img/logo.svg'
import SideNav from '../SideNav'
import { HeaderContainer, HeaderSection, SectionMessage } from './styles'

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
      <HeaderContainer id="header-container">
        <HeaderSection>
          <img src={logo} alt="Logo" className="logo-icon" />
          <h1 className="title">Os melhores produtos</h1>
        </HeaderSection>

        <SectionMessage id="section-message" style={{ visibility, opacity }}>
          <span className="text-message">Produto adicionado ao carrinho com sucesso!</span>
          <span className="close-message">X</span>
        </SectionMessage>
      </HeaderContainer>
      <SideNav />
    </>
  )
}

export default Header
