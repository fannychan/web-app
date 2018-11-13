import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App.js';


const Root = () => (
    <BrowserRouter basename="/web-app">
      <div>
        <Switch>
          <Route exact path='/' component={App} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default Root;
