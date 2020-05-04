import styled from 'styled-components'

export const Sidenav = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.5s;
  padding-top: 60px;

  @media (max-height: 450px) {
    padding-top: 15px;
    width: 100%;

    > a {
      font-size: 18px;  
    }
  }

  > a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;

    &:hover {
      color: #f1f1f1;
    }
  }
`

export const SectionTop = styled.section`
  text-align: left;
  position: relative;

  height: 30px;

  .close-btn {
    position: absolute;
    bottom: 12px;
    left: 10px;
    font-size: 40px;
    color: #78be20;

    background: none;
    border: none;
    outline: none;
    z-index: 3;
  }

  .top-text {
    padding-left: 60px;
    color: #333333;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    position: absolute;
    bottom: 25px;
  }
`

export const SectionFreight = styled.section`
  display: flex;
  justify-content: center;

  .freight-input {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 30px;
    width: 90%;
    height: 39px;
    outline: none;
    color: #a6a6a6;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    padding-left: 10px;

    &::placeholder {
      color: #a6a6a6;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
    }
  }
`

export const SectionContent = styled.section`
  .line {
    width: 95%;
    border: 1px solid #e5e5e5;
    margin-top: 20px;
  }

  .dashed-line {
    border: 1px dotted #e5e5e5;
    width: 95%;
    margin-top: 20px;
  }
`

export const SectionSubtotal = styled.section`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  margin: 0 auto;
  

  @media (min-width: 768px) {
    /* position: inherit;
    bottom: 0;
    right: 10px;
    width: 25%; */
  }

  .total-freight,
  .subtotal,
  .go-cart {
    display: flex;
    justify-content: space-between;
    width: 95%;
    padding: 15px 0;
  }

  .total-freight {
    .freight-text,
    .freight-value {
      color: #3c3738;
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
    }
  }

  .subtotal {
    .subtotal-text,
    .subtotal-value {
      color: #3c3738;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
    }
  }

  .go-cart {
    .btn-go-cart {
      background: #78be20;
      border-radius: 20px;
      width: 100%;
      height: 40px;
      border: none;

      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      line-height: 17px;
      transition: ease-in-out 0.5s;
      outline: none;

      &:hover {
        background: #63a31a;
      }

      &:active {
        background: #fff;
        color: #78be20;
        border: 1px solid #78be20;
      }
    }
  }
`