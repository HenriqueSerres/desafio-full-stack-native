import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { URL_LOGIN, MIN_LENGTH_LOGIN, HTTP_OK } from '../helpers/constants';
import validateEmail from '../helpers/emailIsValid';
import { axiosRequest } from '../service/index';
import UserContext from '../context/UserContext';
import * as S from './Login.styled'


function Login() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [disabledLogin, setDisabledLogin] = useState(true);
  const [verify, setVerify] = useState(false);

  const {
    setIsLogged
  } = useContext(UserContext); 

  const history = useHistory();

  const redirectUser = () => {
    history.push('/city');
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) return redirectUser();
    return history.push('/login')
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
      
      if (response.status === HTTP_OK) {
        const { first_name, email, token } = response.data;
        localStorage.setItem('user', JSON.stringify({ first_name, email, token }));
        setIsLogged(true)
        redirectUser();
      }
    }).catch((error) => console.log(error));
  };

  return (
    <S.LoginSection>
      <S.LoginForm>
        <S.TextInput
            placeholder="First name"
            type="text"
            value={ userName }
            onChange={ ({ target }) => setUserName(target.value)}
        />    
        <S.TextInput
          placeholder="Your email"
          type="email"
          value={ userEmail }
          onChange={ ({ target }) => setUserEmail(target.value)}
        />
        <S.LoginButton
          type="button"
          data-testid="common_login__button-login"
          disabled={ disabledLogin }
          onClick={ () => handleClick() }
        >
          Login
        </S.LoginButton>   
      </S.LoginForm>
      {
        verify && (
          <p>
            Email não cadastrado
          </p>
        )
      }
    </S.LoginSection>
  )
}

export default Login;