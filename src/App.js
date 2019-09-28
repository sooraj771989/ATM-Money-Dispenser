import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header'
import ATMComponent from './component/atmComponent';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <ATMComponent></ATMComponent>
    </div>
  );
}

export default App;
