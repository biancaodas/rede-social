import React from "react";
import Home from './home/routes';
import Login from './login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<h1>Not Found 404!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
