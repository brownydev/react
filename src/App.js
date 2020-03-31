import React from 'react';
import logo from './logo.svg';
import './App.css';
import APICall from './components/RequestAPI'

function App() {
  return (
    <div className="App">
      <h1>Brownys sick app</h1>
      <APICall />
    </div>
  );
}

export default App;
