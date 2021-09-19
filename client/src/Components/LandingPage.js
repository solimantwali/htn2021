import React from 'react';
import {Pane, Button, Heading, Text} from 'evergreen-ui';
import {Link, withRouter} from 'react-router-dom';
import image1 from '../static/stockimage1.jpg';
import image2 from '../static/stockimage2.jpg';
import * as ROUTES from '../constants/routes';
import '../stylesheets/landing.css';

const LandingPage = (props) => {
  return (
    <>
    <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}>Volunteer Matching (Voluntinder)</Heading>
      </Pane>
      <Pane>
        {/* <Button onClick={()=>{changeUserType()}} appearance="primary">Switch between volunteer or organization</Button> */}
        <Button marginRight={10} appearance="primary">Home</Button>
        <Button marginRight={10} appearance="primary">About Us</Button>
        <Button marginRight={10} appearance="primary">Volunteers</Button>
        <Button marginRight={10} appearance="primary">Organization</Button>
        <Button marginRight={16}>Login</Button>
      </Pane>
    </Pane>
    <Pane height='100%' width='100%' display="flex" alignItems="center" justifyContent="left" border="none">
      <Text margin={30} fontWeight={350} fontSize={30} lineHeight={1.5} textAlign='left'>Are you looking for ways to volunteer your unique skills? Would you like to give back to the community?</Text>
      <Pane margin={30} display="flex" alignItems="center" justifyContent="center" border="default">
        <img alt='people volunteering' src={image1}></img>
      </Pane>
    </Pane>
    <Pane height='100%' width='100%' display="flex" alignItems="center" justifyContent="left" border="none">
      <Pane margin={30} display="flex" alignItems="center" justifyContent="center" border="default">
        <img alt='people volunteering' src={image2}></img>
      </Pane>
      <Text margin={30} fontWeight={350} fontSize={30} lineHeight={1.5} textAlign='left'>We're a platform that allows registered charities to connect with motivate and skilled volunteers.</Text>
    </Pane>
    <Pane height='100%' width='100%' display="flex-row" alignItems="center" justifyContent="center" border="none">
      <Text margin={30} fontWeight={300} fontSize={40} lineHeight={1.5} textAlign='center'>Let's Get Started!</Text>
      <br></br>
      <div marginBottom={40}>
      <Link to={ROUTES.VOLUNTEERSIGNIN} className='buttonLink'>
        <Button margin={30} height={70} width={200} appearance="primary">I'm a Volunteer</Button>
      </Link>
      <Link to={ROUTES.ORGSIGNIN} className='buttonLink' >
        <Button margin={30} height={70} width={200} appearance="primary">I'm an Organization</Button>
      </Link>
      </div>
    </Pane>
    <Pane height='100%' width='100%' display="flex-row" alignItems="center" justifyContent="center" border="none">
      <Text margin={30} padding={70} fontWeight={200} fontSize={20} lineHeight={1.5} textAlign='center'>Hack The North 2021</Text>
    </Pane>
    </>
  );
}

export default LandingPage;