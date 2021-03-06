import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import Login from '../Login'
import Home from '../Home'

const Main = (props) => {
    const oktaAuth = new OktaAuth({
      issuer: 'https://dev-6167144.okta.com/oauth2/default',
      clientId: '0oa1vv765hbbXmxJq5d7',
      redirectUri: window.location.origin + '/callback'
    });
    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
      props.history.replace(toRelativeUrl(originalUri, window.location.origin));
    };
  
    return (
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/callback" component={LoginCallback} />
          <SecureRoute path="/home" component={Home} />
        </Switch>
      </Security>
    );
}

export default Main;