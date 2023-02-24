import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import Home from './Home';
import History from './History';
import React,{useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Pro from './Pro';
function App() {
  
  
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Nav/>}>
                <Route index element={<Home></Home>}></Route>
                <Route path='profile' element={<Pro></Pro>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
