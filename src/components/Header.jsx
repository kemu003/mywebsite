import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu, X } from 'lucide-react';

// ============================
// 💅 Styled Components
// ============================

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Glassmorphism effect when scrolled */
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(12px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  /* Header shrinks on scroll */
  height: ${props => props.scrolled ? '70px' : '90px'};
  transition: height 0.3s ease;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #6366f1;
  cursor: pointer;
  letter-spacing: -0.5px;
  user-select: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    background: white;
    flex-direction: column;
    padding: 100px 40px;
    gap: 2rem;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    /* Slide in animation */
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #1f2937;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #6366f1;
  }

  /* Underline effect on hover */
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #6366f1;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: #f3f4f6;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  color: #1f2937;
  z-index: 1001; /* Stay above the menu */
  transition: all 0.2s;

  &:hover {
    background: #e5e7eb;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Overlay = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 999;
`;

// ============================
// 🚀 Main Component
// ============================

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll logic with offset for the fixed header
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <Nav scrolled={scrolled}>
          <Logo onClick={() => scrollToSection('home')}>Kevin Mutai</Logo>

          <NavLinks isOpen={isOpen}>
            {menuItems.map((item) => (
              <NavItem key={item.id}>
                <NavLink onClick={() => scrollToSection(item.id)}>
                  {item.name}
                </NavLink>
              </NavItem>
            ))}
          </NavLinks>

          <MobileToggle onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </MobileToggle>
        </Nav>
      </HeaderContainer>

      {/* Clicks outside the mobile menu will close it */}
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
};

export default Header;