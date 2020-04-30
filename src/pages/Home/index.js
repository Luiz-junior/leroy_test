import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import cart from '../../assets/img/cart.svg'
import ProductsList from '../../components/ProductsList'
import { changeSomething } from '../../store/actions/cartAction'
import { HomeContainer, SectionCart } from './styles'

function Home() {
  const dispatch = useDispatch()

  const [display, setDisplay] = useState('none')

  const { qtdProdCart } = useSelector(state => ({
    qtdProdCart: state.cart.qtd
  }))

  function onOpenNav() {
    document.getElementById("mySidenav").style.width = "375px"
    setDisplay('block')
    dispatch(changeSomething())
  }

  return (
    <HomeContainer>
      <ProductsList display={display} />

      <SectionCart onClick={() => onOpenNav()}>
        <img src={cart} alt="" className="cart-icon" />
        <strong className="qtd-prod">{qtdProdCart}</strong>
      </SectionCart>
    </HomeContainer>
  )
}

export default Home