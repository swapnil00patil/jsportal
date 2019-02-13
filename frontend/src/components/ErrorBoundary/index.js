import React from 'react';
import ReactGA from 'react-ga';

class ErrorBoundary extends React.Component {
  state = { error: false };

  componentDidCatch(error, info) {
    this.setState({ error: true, componentStack: info.componentStack });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.error !== this.state.error) {
      ReactGA.event({
        category: 'Error in react',
        action: window.location.href,
        label: this.state.componentStack,
        nonInteraction: true
      });
    }
  }

  render() {
    if (this.state.error) {
      return 'error';
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
