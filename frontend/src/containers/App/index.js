import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import ScrollToTop from '../../components/ScrollToTop';
import ErrorBoundary from '../../components/ErrorBoundary';
import routes from '../../routes';
import history from '../../routes/history';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <React.Fragment>
        <Router history={history}>
          <ErrorBoundary>
            <Provider store={store}>
              <ScrollToTop>
                {routes(store)}
              </ScrollToTop>
            </Provider>
          </ErrorBoundary>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
