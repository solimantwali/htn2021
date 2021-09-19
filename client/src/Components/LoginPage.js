import React from 'react';
import {Pane, Button, Heading, TextInput, Text} from 'evergreen-ui';
import { useHistory } from "react-router-dom";
import * as ROUTES from '../constants/routes';

const LoginPage = (props) => {
  const [value, setValue] = React.useState('');
  const [password, setPassword] = React.useState('');
  let history = useHistory();

  const handleLogin = () => {
    // check if user is in database and credentials match


    // ima bs it for now
    history.push(ROUTES.HOME);
  }

  return (
    <div>
      <Pane height={120} width='100%' display="flex" alignItems="center" justifyContent="center" border="default">
       <Text fontSize={30}>{props.userType} Login</Text>
      </Pane>
      <Pane height='100%' width='100%' alignItems="center" justifyContent="center" border="none">
        <Pane
          elevation={2}
          marginTop={50}
          marginLeft='30%'
          marginRight='30%'
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text fontSize={26} padding={30}>Sign Into Your Account</Text>
          <br></br>
          <Text marginBottom={10}>Email</Text>
          <TextInput marginBottom={10} onChange={e => setValue(e.target.value)} value={value} />
          <Text marginBottom={10}>Password</Text>
          <TextInput type='password' marginBottom={10} onChange={e => setPassword(e.target.value)} value={password} />
          <Button onClick={()=>{handleLogin()}} width={100} margin={16}>Login</Button>
        </Pane>
      </Pane>
      
    </div>
  );
}

export default LoginPage;