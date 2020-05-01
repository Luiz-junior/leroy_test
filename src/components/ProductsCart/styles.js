import styled from 'styled-components'

export const ProdCard = styled.div`
  margin: 0 auto;
  width: 95%;
  display: flex;
`

export const ProdImgCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 15px;
  border: 1px solid #e5e5e5;
  margin-top: 20px;

  > img {
    width: 90px;
    height: 90px;
  }
`

export const ProdCardInfo = styled.div`
  max-width: 66%;
  padding-left: 20px;
  margin-top: 20px;

  .prod-description {
    .prod-description-text {
      color: #78be20;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
    }
  }

  .prod-qtd-value {
    .code-value {
      display: flex;
      justify-content: space-between;
      padding: 5px 0px;

      color: #a6a6a6;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
    }

    .section-select-qtd {
      display: flex;
      justify-content: space-between;

      .select-qtd {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #e5e5e5;
        border-radius: 30px;
        /* box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); */
        width: 118px;
        height: 40px;

        > button {
          border-radius: 100%;
          border: 1px solid #78be20;
          background: #fff;
          height: 25px;
          width: 25px;
          color: #78be20;
          font-size: 20px;
          outline: none;
          margin: 0px 10px;
        }

        .input-value-qtd {
          width: 30px;
          height: 20px;
          text-align: center;
          border: none;
        }
      }

      .qtd-value {
        color: #333333;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
      }
    }
  }
`