import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import './api';
import './styles';
import store from './configureStore';
import history from './configureHistory';

import App from './containers/App';
import Home from './containers/Home';

import AuthUserSessionHandler from './components/AuthUserSessionHandler/AuthUserSessionHandler';

render(
  <Provider store={store}>
    <App history={history} store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/sign-in" component={null}/>
          <Route path="/sign-up" component={null}/>
          <Route path="/forgot-password" component={null}/>
          <Route path="/reset-password" component={null}/>
        </Switch>
        <AuthUserSessionHandler>
          <Switch>
            <Route
              path={[
                '/sign-in',
                '/sign-up',
                '/forgot-password',
                '/reset-password',
              ]}/>
            {/** Route for global */}
            <Route path="/" component={null}/>
          </Switch>
          <Switch>
            {/** Routes for inner pages */}
            <Route path="/dashboard" component={null}/>
          </Switch>
        </AuthUserSessionHandler>
      </Router>
    </App>
  </Provider>,
  document.getElementById('root'),
);
