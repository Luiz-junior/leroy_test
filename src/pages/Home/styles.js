import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  padding: 20px 5px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 90%;
  }
`
export const SectionCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  top: 70px;

  .cart-icon {
    height: 25px;
    transform: rotateY(180deg);
    padding: 0px 5px;
  }

  .qtd-prod {
    color: #fff;
    font-size: 13px;
    background: #df3828;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 15px;
  }

`