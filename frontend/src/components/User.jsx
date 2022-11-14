import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function User() {
  const {
    user,
  } = useContext(UserContext);
  return user && (
    <div>
      <p>Fisrt Name: { user.first_name }</p>
      <p>Last Name: { user.last_name }</p>
      <p>Email: { user.email }</p>
      <p>Gender: { user.gender }</p>
      <p>Company: { user.company }</p>
      <p>City: { user.city }</p>
      <p>Title: { user.title }</p>
    </div>
  )
}

export default User;