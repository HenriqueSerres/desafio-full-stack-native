import React, { useContext, useEffect } from "react";
import UserContext from '../context/UserContext';

function UsersAtCity() {
  const {
    city,
    usersAtCity,
    fetchAllUsers
  } = useContext(UserContext);

  useEffect(() => {
    fetchAllUsers(city)
  }, []);
  return (
    <div>
      {usersAtCity &&
        usersAtCity.map((user) => (
          <a key={ user.id } href={`/user/${user.id}`}>
            <p>{`${ user.first_name } ${ user.last_name }`}</p>
          </a>
        ))
      }
    </div>
  )
}
export default UsersAtCity;