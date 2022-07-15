import React from "react";
import Home from './home/routes';
import SignIn from "./login/signin";
import SignUp from "./login/signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={<h1>Not Found 404!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
