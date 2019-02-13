import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import App from './containers/App';
import { store } from './store';
import './assets/css/global.css';
import { isMock } from './utils/http';

if(!isMock) {
  ReactGA.initialize('');
}
ReactDOM.render(<App store={store} />, document.getElementById('root'));



