import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import Header from './components/Header/index';
import Card from './components/Card/index';
import Home from './components/Home/index';
import {Route, Routes,Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>  
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
