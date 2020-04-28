import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './styles.scss'
import ProductsCart from '../ProductsCart'
import { goCart } from '../../store/actions/cartAction'

function SideNav() {
  const dispatch = useDispatch()

  const { subtotal } = useSelector(state => ({
    subtotal: state.cart.subtotal
  }))

  /* useEffect(() => {
    subtotal 
  }, []) */


  const onCloseNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mainApp").style.marginLeft = "0";
    document.body.style.backgroundColor = "#fff";
  }

  const onGoCart = () => {
    dispatch(goCart())
  }

  return (
    <div className="sidenav-container">
      {/* {console.log('subTotalLL: ', subtotal)} */}
      <div id="mySidenav" className="sidenav">
        <section className="section-top">
          <button className="close-btn" onClick={() => onCloseNav()} >&times;</button>
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
            {/* <strong className="subtotal-value">R$ {subtotal}</strong> */}
            {subtotal !== 0
              ? <strong className="subtotal-value">R$ {subtotal}</strong>
              : <strong className="subtotal-value">R$ {0}</strong>
            }

          </div>
          <div className="go-cart">
            <button className="btn-go-cart" onClick={() => onGoCart()}>Ir para o carrinho</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SideNav
