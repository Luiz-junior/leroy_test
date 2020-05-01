import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 109px;
  width: 100%;
  background: #78be20;
`
export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 15px;

  .title {
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    line-height: 29px;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .logo-icon {
    height: 50px;
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`

export const SectionMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #158110;
  height: 40px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 109px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease-out;

  .text-message {
    margin-left: 10px;
  }
  .close-message {
    width: 25px;
    height: 25px;
    font-size: 20px;
  }
`