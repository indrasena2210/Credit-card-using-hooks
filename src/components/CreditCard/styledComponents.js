// Style your elements here
import styled from 'styled-components'

export const CreditCardContainer = styled.div`
  height: 100vh;
  display: flex;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    height: 50%;
  }
`
export const CardSideContainer = styled.div`
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 576px) {
    height: 50%;
  }
`
export const PaymentMethodContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    height: 50%;
  }
`
export const Creditcard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 350px;
  padding: 40px;
  margin: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0px 0px 12px #000000;
  @media (max-width: 576px) {
    height: 250px;
    width: 350px;
    padding: 20px;
  }
`
export const Heading = styled.h1`
  margin: 20px;
  color: #ffffff;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #ffd773;
  text-decoration-thickness: 5px;
  border-radius: 6px;
  @media (max-width: 576px) {
    height: 50%;
  }
`

export const PaymentMethodSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  height: 250px;
  width: 350px;
  border-radius: 15px;
  box-shadow: 0px 0px 5px #000000;
  @media (max-width: 576px) {
    height: 50%;
  }
`
export const CardNumber = styled.p`
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 0px;
  font-size: 30px;
  font-weight: 700;
`
export const CardHolderName = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  padding: 0px;
  margin: 0px;
`
export const Name = styled.p`
  color: #ffffff;
  font-size: 20px;
  margin-top: 0px;
  padding-top: 0px;
`
export const PaymentMethodHeading = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: #475569;
  @media (max-width: 576px) {
    height: 50%;
    font-size: 26px;
  }
`
export const Input = styled.input`
  border: 1px solid #c3cad9;
  padiding: 12px;
  margin: 10px;
  outline: none;
  height: 35px;
  width: 75%;
  border-radius: 5px;
  margin: 20px;
  color: #475569;
  @media (max-width: 576px) {
    height: 25px;
    padding: 8px;
  }
`
