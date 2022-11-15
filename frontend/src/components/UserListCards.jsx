import React from 'react'
import { PropTypes } from 'prop-types';
import * as S from './UserListCards.styled'

function UserListCards({ id, first_name, last_name}) {
  return (
    <S.UserListContainer to={`/user/${id}`}>
      <p>{`${ first_name } ${ last_name }`}</p>
    </S.UserListContainer>
  )
}
UserListCards.propTypes = {
  id: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string
}

export default UserListCards