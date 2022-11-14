import React, { useContext, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

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
    <div>
      {usersAtCity &&
        usersAtCity.map((user) => (
          <Link key={ user.id } to={`/user/${user.id}`}>
            <p>{`${ user.first_name } ${ user.last_name }`}</p>
          </Link>
        ))
      }
    </div>
  )
}
export default UsersAtCity;