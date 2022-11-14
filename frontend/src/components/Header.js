import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import classes from './Header.module.css'


function Header() {
  const [name, setName] = useState(''); 
  const {
    isLogged
  } = useContext(UserContext); 

  const history = useHistory();

  useEffect(() => {
    const getFromLocal = JSON.parse(localStorage.getItem('user'));
    setName(getFromLocal !== null ? getFromLocal.first_name : '');
  }, [isLogged]);
  return (
    <div className='container'>
      <nav className={classes.head}>         
        <div>
          <h2 className={classes.nav}>NATIVE-APP</h2>
        </div>
        {isLogged && (
          <>
          <h3 className={classes.nav}>
            { name }
            </h3>
            <button
              className={classes.button}
              type="button"
              onClick={ () => {
                localStorage.clear();
                history.push('/login');
                setName('')
              } }
            >
              Sair
            </button>
          </>
        )}
      </nav>
    </div>
  );
}

export default Header;
