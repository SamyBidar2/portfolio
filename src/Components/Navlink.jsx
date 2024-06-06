import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import openMenu from '../Images/open.svg';
import closeMenu from '../Images/close.svg';

export const Navlinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuIconStyle = {
    width: isMenuOpen ? '20px' : '30px',
    height: isMenuOpen ? '20px' : '30px',
  };

  const toggleButtonStyle = {
    border: 'none',
    outline: 'none',
  };

  return (
    <>
      <Navbar bg="transparent" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Samy Bidar</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={toggleButtonStyle}
          >
            <img
              src={isMenuOpen ? closeMenu : openMenu}
              alt={isMenuOpen ? 'Close' : 'Open'}
              style={menuIconStyle}
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.5, type: 'spring' }}
              >
                <Nav.Link href="#home">Accueil</Nav.Link>
              </motion.div> */}

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.5, type: 'spring' }}
              >
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.5, type: 'spring' }}
              >
                <Nav.Link href="#about">À Propos</Nav.Link>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

