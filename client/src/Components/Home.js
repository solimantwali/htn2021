import React from 'react';
import {Pane, Card, Box} from 'evergreen-ui';

const Home = (props) => {
  // either a volunteer (true) or an organization (false)
  const [userType, setUserType] = React.useState(true);

  const changeUserType = () => {
    setUserType(!userType);
    console.log(userType);
  }

  return (
      <Pane>

    <button onClick={changeUserType()}>Switch between volunteer or organization</button>

      </Pane>
    
  );
}

export default Home;