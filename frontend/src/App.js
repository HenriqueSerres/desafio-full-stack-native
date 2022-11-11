import React from 'react';
import UserProvider from './context/UserProvider';
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Header from './components/Header';
import TotalUser from './pages/TotalUser';

function App() {
  return (
    <UserProvider>
      <Header />
      <Switch>
        <Route exact path='/login' component={ Login } />
        <Route exact path='/user/city/total' component={ TotalUser } />
      </Switch>
    </UserProvider>  
  );
}

export default App;
