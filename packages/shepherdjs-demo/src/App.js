import { useContext } from 'react';
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import 'shepherd.js/dist/css/shepherd.css'
import Shepherd from 'shepherd.js';
import { steps } from './steps'
import logo from './logo.svg';
import './App.css';
import './overwrite.css';

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    },
    scrollTo: true
  },
  useModalOverlay: true,
  steps,
};

const tour = new Shepherd.Tour(tourOptions);
// tour.addSteps(steps)

function Button() {
  // const tour = useContext(ShepherdTourContext);

  return (
    <button onClick={tour.start}>look at demo</button>
  );
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <ShepherdTour steps={steps} tourOptions={tourOptions}> */}
          <Button />
        {/* </ShepherdTour> */}
        <button id="mock-click" onClick={() => alert('hello~~')}>模拟点击</button>
        
        <img id="first-element" src={logo} className="App-logo" alt="logo" />
        <p id="text-element">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          shepherdjs-demo
        </a>
      </header>
    </div>
  );
}

export default App;
