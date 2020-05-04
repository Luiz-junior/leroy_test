import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Sidenav, SectionTop, SectionFreight, SectionContent, SectionSubtotal } from './styles'
import ProductsCart from '../ProductsCart'
import { goCart, calcFreight, changeSideNav } from '../../store/actions/cartAction'

function SideNav(props) {
  const dispatch = useDispatch()

  const { subtotal, qtdProdCart, freight, sidenav } = useSelector(state => ({
    subtotal: state.cart.subtotal,
    qtdProdCart: state.cart.qtd,
    freight: state.cart.freight.freight,
    sidenav: state.cart.sidenav
  }))

  const onCloseNav = () => { dispatch(changeSideNav({ display: 'none', width: 0 })) }

  const onGoCart = () => { dispatch(goCart()) }

  const onCalcFreight = (cep) => dispatch(calcFreight(cep))

  return (
    <div className="sidenav-container">
      <Sidenav id="mySidenav" style={{ width: sidenav.width }}>
        <div>
          <SectionTop>
            <button className="close-btn" onClick={() => onCloseNav()} >&times;</button>
            <span className="top-text">Produtos no carrinho</span>
          </SectionTop>

          <SectionFreight>
            <input type="text" className="freight-input" onBlur={(e) => onCalcFreight(e.target.value)} placeholder="Calcular CEP" />
          </SectionFreight>

          <SectionContent>
            <ProductsCart />
          </SectionContent>
        </div>

        <SectionSubtotal>
          <div className="total-freight">
            <span className="freight-text">Frete</span>
            <span className="freight-value">{!freight ? '-' : freight}</span>
          </div>
          <div className="subtotal">
            <strong className="subtotal-text">Subtotal</strong>
            {subtotal !== 0
              ? <strong className="subtotal-value">R$ {subtotal.toFixed(2)}</strong>
              : <strong className="subtotal-value">R$ {0}</strong>
            }
          </div>
          <div className="go-cart">
            <button className="btn-go-cart" onClick={() => onGoCart()}>Ir para o carrinho</button>
          </div>
        </SectionSubtotal>
      </Sidenav>
    </div>
  )
}

export default SideNav
