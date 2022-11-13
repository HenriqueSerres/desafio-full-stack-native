import React from 'react';
import UserProvider from './context/UserProvider';
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Header from './components/Header';
import TotalUser from './pages/TotalUser';
import UsersAtCity from './pages/UsersAtCity';
import UserDetails from './pages/UserDetails';
import EditUser from './pages/EditUser';

function App() {
  return (
    <UserProvider>
      <Header />
      <Switch>
        <Route exact path='/user/city/total' component={ TotalUser } />
        <Route exact path='/user/edit/:id' component={ EditUser } />
        <Route exact path='/user/city' component={ UsersAtCity } />
        <Route exact path='/user/:id' component={ UserDetails } />
        <Route exact path='/login' component={ Login } />
        <Route exact path="/"><Redirect to="/login" /></Route>
      </Switch>
    </UserProvider>  
  );
}

export default App;
