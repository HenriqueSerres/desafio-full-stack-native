import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import classes from './Header.module.css'


function Header() {
  const [name, setName] = useState(''); 
  const {
    isLogged,
    setIsLogged
  } = useContext(UserContext); 

  const history = useHistory();

  console.log(isLogged);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && !isLogged) setIsLogged(true)
    setName(userData !== null ? userData.first_name : '');
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
                setName('')
                setIsLogged(false)
                history.push('/login');
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
