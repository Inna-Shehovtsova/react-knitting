import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/counter"
import {SockCounter} from "./components/sockCounter"
import {SockInput} from "./components/sockInput"
function App() {
  
  return (
    <div className="App">
      <header className="Вязание">
        
        
      </header>
     <SockInput />
      <SockCounter/>
    <Counter name='simpleCounter'/>
  
    </div>
  );
}

export default App;
