import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import './api';
import './styles';
import store from './configureStore';
import history from './configureHistory';
import App from './containers/App';
import Home from './containers/Home';

render(
  <Provider store={store}>
    <App history={history} store={store}>
      <Router history={history}>
        <Route to="/" component={Home}/>
      </Router>
    </App>
  </Provider>,
  document.getElementById('root'),
);
