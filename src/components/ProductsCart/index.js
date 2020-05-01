import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import './styles.scss'
import { ProdCard, ProdImgCard, ProdCardInfo } from './styles'
import { getProductsCart, addAllProdsCart as addAllProdsCartAction, subTotal, goCart as goCartAction } from '../../store/actions/cartAction'

let cart = []

function ProductsCart() {
  const dispatch = useDispatch()

  const { idProdsCart, changeSomething, productsAddedCart, goCart, allProdsCart } = useSelector(state => ({
    idProdsCart: state.cart.productsCart,
    changeSomething: state.cart.changeSomething,
    productsAddedCart: state.cart.productsAddedCart,
    goCart: state.cart.goCart,
    allProdsCart: state.cart.allProdsCart,
  }))

  const [QtdProdCart, setQtdProdCart] = useState(0)

  useEffect(() => {
    calcSubTotal(productsAddedCart)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, productsAddedCart, QtdProdCart])

  const calcSubTotal = productsAddedCart => {
    if (productsAddedCart.length > 0) {
      let total = productsAddedCart.reduce((prev, curr) => 
        prev + parseFloat(`${curr.price.to.integers}.${curr.price.to.decimals}`) * curr.qtdCart, 0)
      
      dispatch(subTotal(total))
    }
  }

  useEffect(() => {
    dispatch(getProductsCart(idProdsCart))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeSomething])

  const onRemoveProdCart = (id) => { }

  const onAddProdCart = (id) => {
    productsAddedCart.filter((item, index) => {
      if (item.id === id) {
        item.qtdCart = item.qtdCart + 1
        let price = parseFloat(`${item.price.to.integers}.${item.price.to.decimals}`)
        let totalProd = price * item.qtdCart

        if (cart.length === 0)
          cart = [{ id, qtdProCart: item.qtdCart, totalProd }]
        else {
          if (cart.length === 1 && cart[0].id !== id) {
            cart.push({ id, qtdProCart: item.qtdCart, totalProd })
          } else
            cart[index] = { id, qtdProCart: item.qtdCart, totalProd }
        }
      }

      setQtdProdCart(QtdProdCart + 1)
      dispatch(addAllProdsCartAction(cart))
      dispatch(goCartAction(goCart))
    })
  }

  if (!productsAddedCart)
    return <strong>Não há produtos no carrinho :(</strong>

  return (
    <div className="productcart-container">
      {productsAddedCart.map((prod, i) => {
        let priceProd = parseFloat(`${prod.price.to.integers}.${prod.price.to.decimals}`)

        return (
          <div key={i} className="products-card">
            <hr className="line" />
            <ProdCard>
              <ProdImgCard>
                <img src={prod.picture} alt="Imagem produto" />
              </ProdImgCard>
              <ProdCardInfo>
                <div className="prod-description">
                  <span className="prod-description-text">{prod.name}</span>
                </div>
                <div className="prod-qtd-value">
                  <div className="code-value">
                    <span>Cód. {prod.id} </span>
                    {cart.length > 0 && cart[i] !== undefined
                      ? <span className="">{`${cart[i].qtdProCart}`} un. R$ {`${cart[i].totalProd}`}</span>
                      : <span className="">{prod.qtdCart} un. R$ {priceProd}</span>
                    }
                  </div>
                  <div className="section-select-qtd">
                    <div className="select-qtd">
                      <button className="btn-remove" onClick={() => onRemoveProdCart(prod.id)}>-</button>
                      <input className="input-value-qtd" type="text" value={prod.qtdCart} onChange={() => { }} />
                      <button className="btn-add" onClick={() => onAddProdCart(prod.id)}>+</button>
                    </div>

                    {cart.length > 0 && cart[i] !== undefined
                      ? <span className="qtd-value">{`${cart[i].qtdProCart}`} un. R$ {`${cart[i].totalProd}`}</span>
                      : <span className="qtd-value">{prod.qtdCart} un. R$ {priceProd}</span>
                    }
                  </div>
                </div>
              </ProdCardInfo>
            </ProdCard>
          </div>
        )
      })}
      <hr className="dashed-line" />
    </div>
  )
}

export default ProductsCart
