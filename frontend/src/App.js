import React from 'react';
import UserProvider from './context/UserProvider';
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Header from './components/Header';
import TotalUser from './pages/TotalUser';
import UsersAtCity from './pages/UsersAtCity';
import UserDetails from './pages/UserDetails';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserProvider>
      <Header />
      <Switch>
        <Route exact path='/city' component={ TotalUser } />
        <Route exact path='/city/:city' component={ UsersAtCity } />
        <Route exact path='/user/:id' component={ UserDetails } />
        <Route exact path='/login' component={ Login } />
        <Route exact path="/"><Redirect to="/login" /></Route>
      </Switch>
    </UserProvider>  
  );
}

export default App;
