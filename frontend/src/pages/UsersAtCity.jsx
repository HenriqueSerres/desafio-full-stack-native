import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import UserListCards from "../components/UserListCards";
import UserContext from '../context/UserContext';
import * as S from './UsersAtCity.styled'

function UsersAtCity() {
  const {
    usersAtCity,
    fetchAllUsers
  } = useContext(UserContext);

  const { city } = useParams();
  useEffect(() => {
    fetchAllUsers(city)
  }, []);
  return (
    <S.UserList>
      {usersAtCity &&
        usersAtCity.map(({ id, first_name, last_name }) => (
          <UserListCards key={id} id={id} first_name={first_name} last_name={last_name} />
        ))
      }
    </S.UserList>
  )
}
export default UsersAtCity;