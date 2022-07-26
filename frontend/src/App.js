
import './App.css';
import { BrowserRouter , Routes ,Route, Link } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { Store } from './Store';


function App() {

  const {state } = useContext(Store); 
  const {cart} = state;
  return (
   <BrowserRouter> ,
    <div >
      <header>
      <Navbar bg="light" expand="lg">
  <Container>
    <LinkContainer to="/">
    <Navbar.Brand >amazona</Navbar.Brand>
    </LinkContainer>
    <Nav className='me-auto'>
      <Link to="/cart" className='nav-link'>
        Cart 
        {cart.cartItems.length> 0 && (
           <Badge pill bg="danger">
            {cart.cartItems.length}
           </Badge>
        )}
      </Link>
    </Nav>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      
      </header>
      <main>
        <Container className="mt-3">
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} ></Route>
           <Route path="/" element ={<HomeScreen />}></Route>
           
        </Routes>
        </Container>
        
        
      </main>
    </div>
  </BrowserRouter>  
  );
}

export default App;
