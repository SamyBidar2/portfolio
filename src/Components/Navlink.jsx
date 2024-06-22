import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
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
      <Navbar style={{ backgroundColor: '#0d0e12'}} variant="dark" expand="lg" fixed='top'>
        <Container style={{ borderBottom: '1px solid white', paddingBottom:'10px'}}>
          <Navbar.Brand as={Link} to="/#home">Samy Bidar</Navbar.Brand>
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
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.5, type: 'spring' }}
              >
                <Nav.Link as={Link} className='text-light' to="/#portfolio">Projets</Nav.Link>
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.5, type: 'spring' }}
              >
                <Nav.Link as={Link} className='text-light' to="/#about">Compétences et Expériences</Nav.Link>
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.5, type: 'spring' }}
              >
                <Nav.Link as={Link} className='text-light' to="/#contact">Contact</Nav.Link>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
