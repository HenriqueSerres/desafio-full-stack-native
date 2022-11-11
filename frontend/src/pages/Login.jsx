import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { URL_LOGIN, MIN_LENGTH_LOGIN, HTTP_OK } from '../helpers/constants';
import validateEmail from '../helpers/emailIsValid';
import { axiosRequest } from '../service/index';


function Login() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [disabledLogin, setDisabledLogin] = useState(true);
  const [verify, setVerify] = useState(false);

  const history = useHistory();

  const redirectUser = () => {
    history.push('/user/data/total');
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) redirectUser();
  }, []);

  useEffect(() => {
    const emailCheck = validateEmail(userEmail);
    const firstName = userName.length >= MIN_LENGTH_LOGIN;
    if (emailCheck && firstName) {
      setDisabledLogin(false);
    } else {
      setDisabledLogin(true);
    }
  }, [userEmail, userName]);

  const handleClick = () => {
    axiosRequest(URL_LOGIN, 'POST', {
      first_name: userName,
      email: userEmail,
    }).then((response) => {
      if (
        response.message !== undefined
        && response.message.includes('404')
      ) return setVerify(true);
      const { first_name, email, token } = response.data;
      localStorage.setItem('user', JSON.stringify({ first_name, email, token }));
      if (response.status === HTTP_OK) {
        redirectUser();
      }
    }).catch((error) => console.log(error));
  };

  return (
    <>
      <form>
        <input
            placeholder="First name"
            type="text"
            value={ userName }
            onChange={ ({ target }) => setUserName(target.value)}
        />    
        <input
          placeholder="Your email"
          type="email"
          value={ userEmail }
          onChange={ ({ target }) => setUserEmail(target.value)}
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ disabledLogin }
          onClick={ () => handleClick() }
        >
          Login
        </button>   
      </form>
      {
        verify && (
          <p>
            Email não cadastrado
          </p>
        )
      }
    </>
  )
}

export default Login;