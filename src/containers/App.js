import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    history: PropTypes.object,
    store: PropTypes.object,
  };

  render() {
    const {children} = this.props;
    return children;
  }
}

export default App;
