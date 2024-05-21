import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { createGlobalStyle } from 'styled-components';
import './App.css'
import SignUp from './pages/SignUp'
import Netflix from './pages/Netflix'
import Login from './pages/Login'
import Player from './pages/Player';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/player' element={<Player/>}/>
            <Route exact path='/' element={<Netflix/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
