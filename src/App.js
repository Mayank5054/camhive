import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home01 from './components/home01';
import Login from './components/Login';

function App() {
   
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home01 />}></Route>
      <Route exact path='/login' element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;

