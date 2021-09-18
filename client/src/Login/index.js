import React from 'react'
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'
import { withOktaAuth } from '@okta/okta-react';

const Login = (props) => {

    async const login = () => {
    await props.oktaAuth.signInWithRedirect();
    }

    if (this.props.authState.isAuthenticated) {
        return <Redirect to='/home' />
    } else {
        return (
        <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button variant="contained" color="primary" onClick={this.login}>Login with Okta</Button>
        </div>
        )
    }
}

export default withOktaAuth(Login);