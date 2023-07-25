'use client';
import Image from 'next/image';
import logo from '../../../public/logo.png';
// import { createContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';


export default function NavbarHome(){
    return(
      <section className='navbar-home'>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
            <Container fluid>
            <Navbar.Brand href="/">
              <Image src={logo} alt={''} className='img-logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Button variant='primary' as='a' className='btn-nav'>Devenir Petsitter</Button>
                  <Button variant='primary' as='a' className='btn-nav'>Trouver un Petsitter</Button>
                  <Nav.Link href="#">Nous contacter</Nav.Link>
                  <Nav.Link href="#">Se connecter</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
      </section>
    )
}