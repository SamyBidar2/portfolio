import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import openMenu from '../../Images/open.svg';
import closeMenu from '../../Images/close.svg';

const Sidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 450px;
  height: 100vh;
  background-color: #15181e;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  align-content:center;
  padding: 0 40px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 1000;

  @media (min-width: 768px) {
    transform: translateX(0); /* Always visible on tablet and desktop */
  }
  @media (max-width: 1600px)
  {
    width: 270px;
  }
`;

const MenuIcon = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const NavLink = styled(Nav.Link)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  margin: 10px 0;
  &:hover {
    color: #ffffff;
  }
`;

const NavbarBrand = styled(Navbar.Brand)`
  color: white;
  font-size: 1.5rem;
`;

const TopNavbar = styled(Navbar)`
  @media (min-width: 768px) {
    display: none; /* Hide top navbar on tablet and desktop */
  }
`;

export const Navlinks2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <TopNavbar bg="transparent" variant="dark" expand="lg">
        <Container>
          <NavbarBrand href="#home">Samy Bidar</NavbarBrand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ border: 'none', outline: 'none' }}
          >
            <MenuIcon
              src={isMenuOpen ? closeMenu : openMenu}
              alt={isMenuOpen ? 'Close' : 'Open'}
            />
          </Navbar.Toggle>
        </Container>
      </TopNavbar>

      <Sidebar isOpen={isMenuOpen}>
        <NavLinkContainer>
          <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>
            Accueil
          </NavLink>
          <NavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>
            Portfolio
          </NavLink>
          <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>
            À Propos
          </NavLink>
        </NavLinkContainer>
      </Sidebar>
    </>
  );
};

export default Navlinks2;
