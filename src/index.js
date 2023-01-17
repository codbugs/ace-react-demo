import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import CardPayloadEditor from './CardPayloadEditor';
import CardPreview from './CardPreview';
import Link from './components/Link';
import Samples from './samples/Samples';
import SiteMap from './SiteMap';


function App () {

  const [payload, setPayload] = useState(null);

  const setSamplePayload = async (payload) => {
    if(payload !== null && payload !== undefined) {
      setPayload(JSON.stringify(payload));
    }
  };

  return <main className="app">
    <h1 className="app--header">Adaptive Card Playground</h1>
    <div className="app--body">
      <p className="intro">Welcome to the application where you can try and test your Adaptive Cards without having to reload the page. The technologies used in the web application are React and, of course, the Adaptive Cards package for React that you can find at the following <Link url="https://www.npmjs.com/package/adaptivecards-react">link</Link>.</p>
      <p className="intro">To start using the application, all you have to do is paste the JSON of your card or start typing it in the corresponding box and you will see the result immediately.</p>
      <ul className="card--list">
        <li className="card--item"><CardPayloadEditor onPayloadChange={ payload => setPayload(payload) } /></li>
        <li className="card--item"><CardPreview payload={ payload } /></li>
      </ul>
      <Samples onClick={ setSamplePayload } />
    </div>
    <footer className="app--footer">
      <div className="app--footer-wrapper">
        <SiteMap />
      </div>
    </footer>
  </main>;
}

const root = ReactDOM.render(<App />, document.getElementById('root'));