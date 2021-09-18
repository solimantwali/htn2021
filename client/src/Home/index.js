import React from 'react';

const Home = (props) => {
  // either a volunteer (true) or an organization (false)
  const [userType, setUserType] = React.useState(true);

  const changeUserType = () => {
    setUserType(!userType);
    console.log(userType);
  }

  return (
    <div>
      Home page.
      <button onClick={changeUserType()}>Switch between volunteer or organization</button>
    </div>
  );
}

export default Home;