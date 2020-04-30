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

  const onLoadOffer = (from, label, id) => {
    if (from && label) {
      document.getElementById(`exclusivity-${id}`).style.display = 'block'
      document.getElementById(`offer-discount-${id}`).style.display = 'flex'
      document.getElementById(`card-container-${id}`).style.borderBottom = 'none'
      document.getElementById(`offer-price-${id}`).classList.add('from-active')
      document.getElementById(`main-price-${id}`).classList.add('to-price')
      document.getElementById(`section-yellow-${id}`).style.display = 'block'
    }
  }

  if (loading)
    return <Loading> <strong >Carregando...</strong> </Loading>

  return (
    <ProductsListContainer display={props.display}>
      {products.map(prod => {
        let from = prod.price.from
        let label = prod.tag.label

        return (
          <CardContainer
            key={prod.id}
            className="card-container"
            id={`card-container-${prod.id}`}
            onLoad={() => onLoadOffer(prod.price.from, prod.tag.label, prod.id)}
          >
            <span className="exclusivity" /* style={{ display }}  */ id={`exclusivity-${prod.id}`}> Exclusividade </span>
           
            <div className="card-img">
              <img src={prod.picture} alt="Imagem do Produto" className="product-img" />
            </div>
            <CardDetails>
              <div className="offer-discount" id={`offer-discount-${prod.id}`}>
                <span className="offer-text">OFERTA</span>
                <span className="offer-value">-{prod.offer.value}%</span>
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
                {prod.price.from ? (
                  <strong className="offer-price" id={`offer-price-${prod.id}`}> R$
                    {prod.price.from ? prod.price.from.integers : ''},
                    {prod.price.from ? prod.price.from.decimals : ''}
                    <span>{prod.unit}</span>
                  </strong>
                ) : ''}
                <br />

                <strong className="main-price" id={`main-price-${prod.id}`}> R$
                  {prod.price.to.integers},
                  {prod.price.to.decimals} &nbsp;
                </strong><br />

                <span>
                  <span className="s-juros">{prod.installments.amount}x de </span>
                  <span className="installment-price">
                    R$ {prod.installments.price.integers},
                    {prod.installments.price.decimals}
                  </span> &nbsp;
                  <span className="s-juros">s/juros</span>
                </span>
              </div>
              <div className="section-yellow" id={`section-yellow-${prod.id}`}></div>
            </CardDetails>
          </CardContainer>
        )
      })}
    </ProductsListContainer>
  )
}

export default ProductsList
