import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import CV from './CV.js';
import App from './App.js';

const Root = () => (
    <BrowserRouter basename="/web-app">
      <div>
        {/* <Navbar />*/}
        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/cv" component={CV} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default Root;
