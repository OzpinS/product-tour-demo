import { useState } from 'react';
import IntroJs from 'intro.js';
// import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import { steps } from './steps'
import './introjs.css'
import logo from './logo.svg';
import './App.css';

function App() {
  const handleStart = () => {
    IntroJs()
      .setOptions({
        steps: steps,
      })
      .start();
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleStart}>look at demo</button>
        <img id="step-img-1" src={logo} className="App-logo" alt="logo" />
        <p id="step-p-1">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          introjs-demo
        </a>
      </header>
    </div>
  );
}

export default App;
