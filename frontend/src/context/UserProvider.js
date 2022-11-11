import React from 'react';
import PropTypes from 'prop-types';

import UserContext from './UserContext';

function UserProvider({ children }) {
  
  return (
    <UserContext.Provider value={123}>
      { children }
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;