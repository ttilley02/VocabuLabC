import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import RegPage from './routes/RegPage';
import LoginPage from './routes/LandingPage';
import CardsPage from './routes/LandingPage';
import ProfilePage from './routes/LandingPage';
import './App.css';

cexport default class App extends Component {
  state = { hasError: false}

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact path={'/'}
          component={LandingPage}
        />
          <Route
          path={'/reg'}
          component={RegPage}
        />
          <Route
          path={'/login'}
          component={LoginPage}
        />
          <Route
          path={'/profile'}
          component={ProfilePage}
        />
          <Route
          path={'/cards'}
          component={CardsPage}
        /> 
      </Switch>
   
    </div>
  );
  }
}


