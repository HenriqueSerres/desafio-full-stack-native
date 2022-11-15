import React, { useContext, useEffect } from "react";
import CityCards from "../components/CityCards";
import UserContext from '../context/UserContext';
import * as S from './TotalUser.styled'

function TotalUser() {

  const {
    totalAtCity,
    fetchTotalUsers,
  } = useContext(UserContext);

  useEffect(() => {
    fetchTotalUsers()
  }, []);

  return (
    <S.CardList>
      {totalAtCity &&
        totalAtCity.map(({ city, customers_total }) => (
          <CityCards city={ city } customers_total={customers_total} key={ city }/>
        ))
      }
    </S.CardList>
  )
}

export default TotalUser;