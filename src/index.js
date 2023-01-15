import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import CardPayloadEditor from './CardPayloadEditor';
import CardPreview from './CardPreview';
import GithubIconLink from './GithubIconLink';
import LinkedInIconLink from './LinkedInIconLink';
import Link from './components/Link';
import Text from './components/Text';


function App () {

  const [payload, setPayload] = useState(null);

    return <main className="app">
      <h1 className="app--header">Adaptive Card Playground</h1>
      <div className="app--body">
        <p className="intro">Welcome to the application where you can try and test your Adaptive Cards without having to reload the page. The technologies used in the web application are React and, of course, the Adaptive Cards package for React that you can find at the following <Link url="https://www.npmjs.com/package/adaptivecards-react">link</Link>.</p>
        <p className="intro">To start using the application, all you have to do is paste the JSON of your card or start typing it in the corresponding box and you will see the result immediately.</p>
        <ul className="card--list">
          <li className="card--item"><CardPayloadEditor onPayloadChange={ payload => setPayload(payload) } /></li>
          <li className="card--item"><CardPreview payload={ payload } /></li>
        </ul>
      </div>
      <footer className="app--footer">
        <Text>Adaptive Cards Playground is a web application made with the aim of learning about the creation and configuration of Adaptive Cards. Also, it would be great if it helps other people to understand, try or test their Adaptive Cards.</Text>
        <Text>This project is open source and is available in the following Github repository, <Link url="https://github.com/codbugs/ace-react-demo">ace-react-demo</Link>. If you have any suggestion, feel free to create an issue at the following <Link url="https://github.com/codbugs/ace-react-demo/issues/new">link</Link>.</Text>
        <Text>More information in the following social networks links</Text>
        <ul className="social-media--list">
          <li className="social-media--item"><LinkedInIconLink /></li>
          <li className="social-media--item"><GithubIconLink /></li>
        </ul>
      </footer>
    </main>;
}

const root = ReactDOM.render(<App />, document.getElementById('root'));