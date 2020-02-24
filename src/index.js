import React from 'react';
import ReactDOM from 'react-dom';
import {Globalstyle} from './style.js';
import App from './App';

const Styleapp=(
  <div>
  <Globalstyle />
    <App />
  </div>
);

ReactDOM.render(Styleapp , document.getElementById('root'));
