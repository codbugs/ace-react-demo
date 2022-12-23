# Initial Setup

1. npm init -y
2. npm i react@17.0.2 react-dom@17.0.2 react-scripts adaptive-react
3. mkdir src
4. touch index
   1. import React from 'react';
   2. import ReactDOM from 'react-dom';
   3. function App() { return <h1>Hello Adaptive Cards</h1>; };
   4. const root = ReactDOM.render(<App />, document.getElementById('root'));
5. mkdir public
6. touch index.html
   1. <html....
   2. <div id="root"></div>
7. add in package json, scripts section
   1. "start": "react-scripts start"