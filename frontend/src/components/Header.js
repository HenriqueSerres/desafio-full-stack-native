import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  const [name, setName] = useState('');  

  const history = useHistory();

  useEffect(() => {
    const getFromLocal = JSON.parse(localStorage.getItem('user'));
    setName(getFromLocal !== null ? getFromLocal.first_name : '');
  }, []);
  return (
    <>
      <div>
        <h2>NATIVE-APP</h2>
      </div>
      <nav>      
        <button
          type="button"
          onClick={ () => history.push('/user/city') }
        >
          Usuários por Cidade
        </button>
        <button
          type="button"
          onClick={ () => history.push('/user/city/total') }
        >
          Total Usuários por Cidade
        </button>      
        <h3>
        {
        name && (
          <p>
            { name }
          </p>
        )
      }
        </h3>
        <button
          type="button"
          onClick={ () => {
            localStorage.clear();
            history.push('/login');
            setName('')
          } }
        >
          Sair
        </button>
      </nav>
    </>
  );
}

export default Header;
