import React from 'react';
import UserProvider from './context/UserProvider';
import { Route, Switch } from 'react-router-dom'
import login from './pages/login'
// import './App.css';

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route exact path='/login' component={login} />
      </Switch>
    </UserProvider>
  );
}

export default App;
