import React from 'react';
import UserProvider from './context/UserProvider';
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Header from './components/Header';
import User from './pages/User';
// import './App.css';

function App() {
  return (
    <UserProvider>
      <Header />
      <Switch>
        <Route exact path='/login' component={ Login } />
        <Route exact path='/user' component={ User } />
      </Switch>
    </UserProvider>  
  );
}

export default App;
