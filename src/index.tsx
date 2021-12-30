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
import EditorsListView from './app/views/EditorsList.view';
import PostCreateView from './app/views/PostCreate.view';
import EditorProfileView from './app/views/EditorProfile.view';

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

          { /* React Router Versao 5.1 - Instalar : yarn add react-router@5.1.0 */ }
          { /* - Feito downgrade do React Router para versao 5.1.0
               - Problemas com versões mais novas : parâmetro exact - implementação alternativa não funcional */ }

            {/* <Route path="/home" exact> <Home /> </Route> */}
            <Route path="/" exact> {<Home />} </Route>

            <Route path="/editores" exact> <EditorsListView /> </Route>
            <Route path="/editores/:id" > <EditorProfileView /> </Route>

            <Route path="/posts/criar" > <PostCreateView /> </Route>

            { /* Eliminar da aplicação - inicio - deixado apenas como exemplo */}
            <Route path="/contato" > <Contact /> </Route>
            <Route path="/usuario/:userId" > <UserView /> </Route>
            <Route path="/calc/:a/:b" > <CalcView /> </Route>
            { /* Eliminar da aplicação - fim */}

            <Route> <NotFound404 /> </Route>



          { /* React Router Versao > 5.1 e < 6 */ }

            { /*

            <Route path="/home" children={<Home />} />

            <Route path="/editores" children={<EditorsListView />} />
            // <Route path="/editores/:id" children={<EditorProfileView />} /> //

            <Route path="/editor/:id" children={<EditorProfileView />} />
            <Route path="/posts/criar" children={<PostCreateView />} />

            // Eliminar da aplicação - inicio - deixado apenas como exemplo //
            <Route path="/contato" children={<Contact />} />
            <Route path="/usuario/:userId" children={<UserView />} />
            <Route path="/calc/:a/:b" children={<CalcView />} />
            // Eliminar da aplicação - fim //

            <Route> <NotFound404 /> </Route>

            */ }
 


          { /* React Router - Versão >= 6 */ }
          
            { /*
            <Route path={'/'} element={<Home /> } />
            <Route path={'/contato'} element ={<Contact />} />
            <Route element={<NotFound404 />} /> */}

            {/* <Route path={'/home'} element={<Home />}></Route>
            <Route path={'/contato'} element={<Contact />} ></Route> 
            <Route element={<NotFound404 />} ></Route> */}



        </Switch>
        {/* </NavBar> */}
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
