import React from 'react';
import logo from './assets/Pizza.svg';
import './App.css';
import MyButton from './MyButton';
import ListGroup from './components/ListGroup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton/>
        <ListGroup/>
      </header>
    </div>
  );
}
export default App;
