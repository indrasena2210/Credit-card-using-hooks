// Write your code here
import {useState} from 'react'

import {
  CreditCardContainer,
  CardSideContainer,
  Heading,
  Creditcard,
  PaymentMethodContainer,
  PaymentMethodSideContainer,
  CardNumber,
  CardHolderName,
  Name,
  PaymentMethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <CreditCardContainer>
      <CardSideContainer>
        <Heading>CREDIT CARD</Heading>
        <Creditcard data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <div>
            <CardHolderName>CARDHOLDER NAME</CardHolderName>
          </div>
          <Name>{name.toUpperCase()}</Name>
        </Creditcard>
      </CardSideContainer>
      <PaymentMethodContainer>
        <PaymentMethodSideContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <Input
            type="text"
            placeholder="Card Number"
            alt="text"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            alt="text"
            value={name}
            onChange={onChangeName}
          />
        </PaymentMethodSideContainer>
      </PaymentMethodContainer>
    </CreditCardContainer>
  )
}

export default CreditCard
