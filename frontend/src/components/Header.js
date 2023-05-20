import React from 'react'
import { LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap'

const Header = () => {
  return (
    <>                                                                                                      
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            
            <LinkContainer to="/">
              <Navbar.Brand > <div style={{color:'gold'}} >Ismailia Medical Complex | Clinical Pharmacy Team</div></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">              
            <NavLink className='text-white text-font-weight-bold' href='/ratecalc'>Calculator</NavLink>
            <NavLink className='text-white text-font-weight-bold' href='/courses/0'>New Course</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
