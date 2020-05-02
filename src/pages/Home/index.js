import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import cart from '../../assets/img/cart.svg'
import ProductsList from '../../components/ProductsList'
import { changeSomething, changeSideNav } from '../../store/actions/cartAction'
import { HomeContainer, SectionCart } from './styles'

function Home() {
  const dispatch = useDispatch()

  // const [display, setDisplay] = useState('none')

  const { qtdProdCart, sidenav } = useSelector(state => ({
    qtdProdCart: state.cart.qtd,
    sidenav: state.cart.sidenav
  }))

  function onOpenNav() {
    // document.getElementById("mySidenav").style.width = "375px"
    dispatch(changeSideNav({display: 'block', width: '375px'}))
    //setDisplay('block')
    dispatch(changeSomething())

  }

  return (
    <HomeContainer>
      <ProductsList display={sidenav.display} />

      <SectionCart onClick={() => onOpenNav()}>
        <img src={cart} alt="" className="cart-icon" />
        <strong className="qtd-prod">{qtdProdCart}</strong>
      </SectionCart>
    </HomeContainer>
  )
}

export default Home