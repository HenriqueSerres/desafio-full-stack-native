import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getAxiosRequestTotalCity, getAxiosRequestUserCity} from '../service/index';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [totalAtCity, setTotalAtCity] = useState();
  const [usersAtCity, setUsersAtCity] = useState();
  const [city, setCity] = useState('');

  const fetchTotalUsers = async() => {
    const data = await getAxiosRequestTotalCity();
    setTotalAtCity(data);      
  };

  const fetchAllUsers = async(city) => {
    const data = await getAxiosRequestUserCity(city);
    setUsersAtCity(data);      
  };

  const handleCity = (value) => setCity(value);

  const value = {
    totalAtCity,
    usersAtCity,
    city,
    fetchTotalUsers,
    fetchAllUsers,
    handleCity
  }
  console.log(usersAtCity);
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