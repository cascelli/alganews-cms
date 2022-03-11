import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; // Trocado por imports.css
import './core/imports.css';
//import App from './App'; // removido do projeto
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './core/globalStyles'
import App from './app';
//import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import NotFound404 from './app/views/NotFound404.view';
//import Contact from './app/views/Contact.view';
//import Home from './app/views/Home.view';
//import UserView from './app/views/User.view';
//import CalcView from './app/views/Calc.view';
//import NavBar from './app/components/NavBar';
//import EditorsListView from './app/views/EditorsList.view';
//import PostCreateView from './app/views/PostCreate.view';
//import EditorProfileView from './app/views/EditorProfile.view';

import { Provider } from 'react-redux'
import store from './core/store'
ReactDOM.render(
  <React.StrictMode>

    {/* <div> */}

      {/* Movido para componente NavBar.tsx */}
      {/*
        <nav>
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav> 
      */}

      {/* Movido para src/app/index.tsx */}
      {/* 
        <BrowserRouter>
        </BrowserRouter> 
      */}


    {/* </div> */}

    {/* configura a store raiz */}  
    <Provider store={store}>
      <App />
    </Provider>
    
    <GlobalStyles />

  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
