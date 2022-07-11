import React from "react";
import Home from './home/routes';
import Login from './login/login'


function App() {
  console.log(window.location.href); //rotas de páginas de login e home
  const url = window.location.href;
  return (
      url === 'http://localhost:3000/'
      ? <Home/>
      : <Login/>
  )
}

export default App;
