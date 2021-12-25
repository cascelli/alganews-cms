import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; // Trocado por imports.css
import './core/imports.css';
//import App from './App'; // removido do projeto
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound404 from './app/views/NotFound404.view';
import Contact from './app/views/Contact.view';
import Home from './app/views/Home.view';
import UserView from './app/views/User.view';
import CalcView from './app/views/Calc.view';
//import NavBar from './app/components/NavBar';
import GlobalStyles from './core/globalStyles'

ReactDOM.render(
  <React.StrictMode>

    {/* <div> */}

      {/* Movido para componente NavBar.tsx
      <nav>
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav> */}
      
      <BrowserRouter>
        {/* <NavBar /> */}
        <Switch>

          <Route path={'/home'}> <Home /> </Route>
          <Route path={'/contato'} > <Contact /> </Route>
          <Route path={'/usuario/:userId'} > <UserView /> </Route>
          <Route path={'/calc/:a/:b'} > <CalcView /> </Route>
          <Route> <NotFound404 /> </Route>

          {/* <Route path={'/'} element={<Home /> } />
          <Route path={'/contato'} element ={<Contact />} />
          <Route element={<NotFound404 />} /> */}

          {/* <Route path={'/home'} element={<Home />}></Route>
          <Route path={'/contato'} element={<Contact />} ></Route> 
          <Route element={<NotFound404 />} ></Route> */}

        </Switch>
      </BrowserRouter>

    {/* </div> */}
    
    <GlobalStyles />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
