import Image from "next/image";
import logo from "../../../public/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function NavbarHome() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setIsConnected(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setIsConnected(false);
    window.location.href = "/connexion";
  };

  return (
    <section className="navbar-home">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image src={logo} alt={""} className="img-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button
                variant="primary"
                as="a"
                href="/form_petsitter"
                className="btn-nav"
              >
                Devenir Petsitter
              </Button>
              <Button variant="primary" as="a" className="btn-nav">
                Trouver un Petsitter
              </Button>
              <Nav.Link href="/contacteznous">Nous contacter</Nav.Link>
              {isConnected ? (
                <Nav.Link onClick={handleLogout}>Déconnexion</Nav.Link>
              ) : (
                <Nav.Link href="/connexion">Se connecter</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}
