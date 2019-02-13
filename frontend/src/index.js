import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import './assets/css/global.css';
import App from './containers/App';
import configureStore from './store';

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

