import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditUserForm from '../components/EditUserForm';
import User from '../components/User';
import UserContext from '../context/UserContext';
import classes from './UserDetails.module.css'


function UserDetails() {
  const [isEditing, setIsEditing] = useState(false)

  const {
    fetchUser
  } = useContext(UserContext);

  const handleClick = () => setIsEditing((previous) => !previous)
  

  const { id } = useParams();
  useEffect(() => {
    fetchUser(id);
  }, []);

  return (
    <div className={classes.details}>
      {isEditing ? <EditUserForm closeEdit={ handleClick } />: <User />}
      <button className={classes.button} onClick={ handleClick }>
       {isEditing? "Cancelar Edição": "Editar Usuário"}
      </button>
    </div>
  )
}

export default UserDetails