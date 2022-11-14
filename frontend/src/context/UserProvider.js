import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getAxiosRequestTotalCity, getAxiosRequestUserCity, getAxiosRequestUserId, putAxiosRequestUserUpdate } from '../service/index';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [totalAtCity, setTotalAtCity] = useState();
  const [usersAtCity, setUsersAtCity] = useState();
  const [city, setCity] = useState('');
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState(false);

  const updateUser = async (id, body) => {
    const data = await putAxiosRequestUserUpdate(id, body)
    setUser(data)
  }

  const fetchTotalUsers = async() => {
    const data = await getAxiosRequestTotalCity();

    setTotalAtCity(data);      
  };

  const fetchUser = async(id) => {  
    const data = await getAxiosRequestUserId(id);
    setUser(data);      
  };

  const fetchAllUsers = async(city) => {
    const data = await getAxiosRequestUserCity(city);
    setUsersAtCity(data);      
  };

  const handleCity = (value) => setCity(value);

  const value = {
    totalAtCity,
    usersAtCity,
    user,
    city,
    fetchTotalUsers,
    fetchAllUsers,
    fetchUser,
    updateUser,
    handleCity,
    setIsLogged,
    isLogged
  }
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