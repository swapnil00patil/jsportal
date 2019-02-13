import React, { Component } from 'react';

import ScrollToTop from '../../components/ScrollToTop';
import ErrorBoundary from '../../components/ErrorBoundary';
import routes from '../../routes';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
        <ErrorBoundary>
            <ScrollToTop>
              {routes(store)}
            </ScrollToTop>
        </ErrorBoundary>
    );
  }
}

export default App;
