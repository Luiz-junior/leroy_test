import styled from 'styled-components'

export const ProductsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${props => props.display};
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  width: 170px;
  height: 381px;
  margin: 0px 5px 10px;
  background: #fff;
  border-bottom: 5px solid #78be20;
  position: relative;

  @media (min-width: 768px) {
    margin: 0px 20px 10px;
    width: 250px;
  }

.exclusivity {
  position: absolute;
  right: 0;
  top: 3px;
  text-align: right;
  background: #78be20;
  padding: 4px 10px;

  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  display: none;
}

.card-img {
  margin: 0 auto;

  .product-img {
    width: 170px;
    height: 170px;
  }
}`

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px;
  height: 100%;
  position: relative;

  .offer-discount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
    width: 108%;
    height: 30px;
    background: #ed1c24;
    margin-bottom: 30px;
    position: absolute;
    top: -35px;

    color: #f6d835;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    display: none;

    @media (min-width: 768px) {
      width: 105%;
    }
  }

  .details-info {
    padding-right: 10px;

    @media (min-width: 768px) {
      text-align: center;
    }

    .details-text {
      color: #333;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
    }
  }

  .btn-add-cart {
    background-color: #78be20;
    color: #fff;
    border-radius: 17.5px;
    border: none;
    width: 100%;
    height: 35px;
    margin: 25px 0px;
    outline: none;
    transition: ease-in-out 0.3s;

    &:active {
      border: 1px solid #78be20;
      color: #78be20;
      background: #fff;
    }
  }

  .section-price {
    width: 100%;
    padding-bottom: 10px;
    z-index: 1;

    @media (min-width: 768px) {
      text-align: center;
    }

    .unit {
      font-size: 13px;
      margin-left: 2px;
    }
  }

  .s-juros {
    color: #666;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
  }

  .installment-price {
    color: #666666;
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
  }
`

export const Loading = styled.div`
  color: #78be20;
  text-align: center;
`