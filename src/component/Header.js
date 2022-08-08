import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import LoginButton from './LoginButton';

function Header() {
  return (
    <Navbar bg="dark">
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
      <LoginButton> <Nav.Link href="/home">login</Nav.Link>   </LoginButton>  
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"style={{color:"white"}}>Search</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color:"white"}} eventKey="disabled" disabled>
          About
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </Navbar>
  );
}

export default Header;