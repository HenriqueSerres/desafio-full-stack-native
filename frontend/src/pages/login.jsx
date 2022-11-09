import React, { useState } from 'react';

function Login() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('')

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
          type="text"
          value={ userEmail }
          onChange={ ({ target }) => setUserEmail(target.value)}
        />      
      </form>
    </>
  )
}

export default Login;