import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Notfound404 from './views/Notfound404.view';
import Contact from './views/Contact.view';
import Home from './views/Home.view';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>

        <Route path={'/home'}>
          <Home />
        </Route>

        <Route path={'/contato'}>
          <Contact />
        </Route>

        <Route>
          <Notfound404 />
        </Route>

      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
