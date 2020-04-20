import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './styles.scss'
import fita from '../../assets/img/fita-adesiva.png'
import furadeira from '../../assets/img/furadeira.png'
import { getProducts } from '../../store/actions/productsAction'
import { addCart } from '../../store/actions/cartAction'

//let productsCart = []

function ProductsList() {
  const dispatch = useDispatch()

  const { products, loading, qtdProdCart } = useSelector(state => ({
    products: state.prods.products,
    loading: state.prods.loading,
    qtdProdCart: state.cart.qtd
  }))

  useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      // manipular o dom aqui
    }
  }

  if (loading)
    return <div className="loading"> <strong >Carregando...</strong> </div>

  return (
    <div className="products-list-container">
      {/* {console.log('prods ', products)} */}
      {products.map(prod => {
        return (
          <div
            key={prod.id}
            className="card-container"
            id={`card-container-${prod.id}`}
            onLoad={() => onLoadOffer(prod.price.from, prod.tag.label, prod.id)}
          >
            <span className="exclusivity" id={`exclusivity-${prod.id}`}> Exclusividade </span>
            <div className="card-img">
              <img src={prod.picture} alt="Imagem do Produto" className="product-img" />
            </div>
            <div className="card-details">
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
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductsList
