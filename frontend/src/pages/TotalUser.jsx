import React, { useContext, useEffect } from "react";
import UserContext from '../context/UserContext'

function TotalUser() {

  const {
    totalAtCity,
    fetchTotalUsers,
    handleCity
  } = useContext(UserContext);

  useEffect(() => {
    fetchTotalUsers()
  }, []);
  return (
    <div>
      {totalAtCity &&
        totalAtCity.map((city) => (
          <a
          key={ city.city }
          href="/user/city"
          value={ city.city }
          onClick={ ({ target }) => handleCity(target.value) }>
            <p>CITY: { city.city }</p>
            <p>TOTAL CUSTOMERS: { city.customers_total }</p>
          </a>
        ))
      }
    </div>
  )
}

export default TotalUser;