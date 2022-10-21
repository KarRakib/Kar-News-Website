import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import { AuthContext } from '../../Context/UserContext';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  
console.log(user);
const handelSingOut =()=>{
  logOut()
  .then(()=> {})
  .catch(error=> console.error( error))
}
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand ><Link to='/'>Navbar with text</Link></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {/* <Navbar.Text>
           <Link to='/login' >Mark Otto</Link>
        </Navbar.Text> */}
        
        {
          user?.uid ?
          <>
            {user?.displayName}
            <button onClick={handelSingOut}>Log Out</button>
          </>:
          <>
          <Link to='/login'>Log In</Link>
          <Link to='/register'>Sign Up</Link>
          </>
        }
       <Nav.Link>
       {
          user?.photoURL?
          <Image style={{height: '25px',backgroundColor:'red', width:'100px'}} roundedCircle src={user.photoURL}></Image>:
          <FaUser></FaUser>
        }
       </Nav.Link>
        <Navbar>
          <div className='d-lg-none text-white'>
            <LeftSideNav ></LeftSideNav>
          </div>
        </Navbar>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
/*

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
*/