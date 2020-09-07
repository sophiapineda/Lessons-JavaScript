import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
function App() {
  return (
    <div className="App">
      <Greet name = "Bruce" heroName = "Batman">
        <p>This is children props</p></Greet>
      <Greet name = "Clark" heroName = "SuperMan"><button>Action</button>
      </Greet>
        <Greet name = "Diana" heroName = "Wonderwoman"/>
        <Welcome name = "Bruce" heroName = "Batman" />
        <Welcome name = "Clark" heroName = "SuperMan"/>
        <Welcome Greet name = "Diana" heroName = "Wonderwoman"/>
    </div>
  );
}

export default App;
