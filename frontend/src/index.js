import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import './assets/css/global.css';
import './assets/css/animations.css';
import App from './containers/App';
import configureStore from './store';

// ga
// ReactGA.initialize('UA-50888218-1', { standardImplementation: true });
// ReactGA.pageview(window.location.pathname + window.location.search);

const store = configureStore(window.__REDUX_STATE__);

const AppBundle = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            AppBundle,
            document.getElementById('root')
        );
    });
};

