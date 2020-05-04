import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './styles.css'
import { getProducts } from '../../store/actions/productsAction'
import { addCart } from '../../store/actions/cartAction'
import { ProductsListContainer, CardContainer, Loading, CardDetails } from './styles'

function ProductsList(props) {
  const dispatch = useDispatch()

  const [borderBottom, setBorderBottom] = useState('')

  const { products, loading, qtdProdCart } = useSelector(state => ({
    products: state.prods.products,
    loading: state.prods.loading,
    qtdProdCart: state.cart.qtd
  }))

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const onAddCart = (id, qtd) => { dispatch(addCart(id, qtd)) }

  if (loading)
    return <Loading> <strong >Carregando...</strong> </Loading>

  return (
    <ProductsListContainer display={props.display}>
      {products.map(prod => {
        return (
          <CardContainer
            key={prod.id}
            className="card-container"
            style={{ borderBottom: prod.offer && 'none' }}
          >
            <span className="exclusivity" style={{ display: prod.tag ? 'block' : 'none' }}> Exclusividade </span>

            <div className="card-img">
              <img src={prod.picture} alt="Imagem do Produto" className="product-img" />
            </div>
            <CardDetails>
              <div className="offer-discount" style={{ display: prod.offer ? 'flex' : 'none' }}>
                <span className="offer-text">OFERTA</span>
                {prod.offer &&
                  <span className="offer-value">-{prod.offer.value}%</span>
                }
              </div>
              <div className="details-info">
                <span className="details-text">
                  {prod.name}
                </span>
              </div>

              <button className="btn-add-cart" onClick={() => onAddCart(prod.id, qtdProdCart)}>
                Adicionar ao carrinho
              </button>

              <div className="section-price" id={`section-price-${prod.id}`}>
                <strong className={`offer-price ${prod.offer && 'from-active'}` }> R$
                  {prod.price.to.integers},
                  {prod.price.to.decimals} 
                  <span className="unit">{prod.unit}</span>
                </strong>
                <br />

                {prod.price.from ? (
                  <strong className={`main-price ${prod.offer && 'to-price'}` }>
                    R$ {prod.price.from.integers}, {prod.price.from.decimals}
                  </strong>
                ) : ''}

                {prod.installments &&
                  <span>
                    <span className="s-juros"> {prod.installments.amount}x de </span>
                    <span className="installment-price">
                      R$ {prod.installments.value}
                    </span> &nbsp;
                  <span className="s-juros">s/juros</span>
                  </span>
                }
              </div>
              <div className="section-yellow" style={{ display: prod.offer && 'block' }}></div>
            </CardDetails>
          </CardContainer>
        )
      })}
    </ProductsListContainer>
  )
}

export default ProductsList
