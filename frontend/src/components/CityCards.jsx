import React from 'react'
import { PropTypes } from 'prop-types';
import * as S from './CityCards.styled'


function CityCards({ city, customers_total }) {
  return (
      <S.CardContainer
          to={`/city/${city}`}
         >
          <p>CITY: { city }</p>
          <p>TOTAL CUSTOMERS: { customers_total }</p>
      </S.CardContainer>
  )
}
CityCards.propTypes = {
  city: PropTypes.string,
  customers_total: PropTypes.number
}
export default CityCards