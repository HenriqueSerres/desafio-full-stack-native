import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getAxiosRequestTotalCity } from '../service/index';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [totalAtCity, setTotalAtCity] = useState();  

  const fetchTotalUsers = () => {
    const data = getAxiosRequestTotalCity();
    setTotalAtCity(data);      
  };

  const value = {
    totalAtCity,
    fetchTotalUsers
  }
  console.log(totalAtCity);
  return (
    <UserContext.Provider value={ value }>
      { children }
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;