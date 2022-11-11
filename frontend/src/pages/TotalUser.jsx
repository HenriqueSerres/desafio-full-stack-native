import React, { useContext, useEffect } from "react";
import UserContext from '../context/UserContext'

function TotalUser() {

  const {
    totalAtCity,
    fetchTotalUsers
  } = useContext(UserContext);

  useEffect(() => {
    fetchTotalUsers()
  }, []);
  return (
    <div>
      {totalAtCity &&
        totalAtCity.map((city) => (
          <a key={ city.city }>
            <p>{ city.city }</p>
            <p>{ city.customers_total }</p>
          </a>
        ))
      }
    </div>
  )
}

export default TotalUser;