import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext'

function TotalUser() {

  const {
    totalAtCity,
    fetchTotalUsers,
  } = useContext(UserContext);

  useEffect(() => {
    fetchTotalUsers()
  }, []);

  return (
    <div>
      {totalAtCity &&
        totalAtCity.map(({ city, customers_total }) => (
          <Link
          key={ city }
          to={`/city/${city}`}
         >
          <p>CITY: { city }</p>
          <p>TOTAL CUSTOMERS: { customers_total }</p>
          </Link>
        ))
      }
    </div>
  )
}

export default TotalUser;