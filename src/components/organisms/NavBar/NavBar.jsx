import styled from 'styled-components';
import { Typography, Container } from '../../atoms';
import { useState, useEffect } from 'react';

const NavBarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
  transition: all 0.3s ease;
  padding: ${props => props.scrolled ? '12px 0' : '20px 0'};
  
  @media (max-width: 768px) {
    padding: ${props => props.scrolled ? '10px 0' : '16px 0'};
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  
  span {
    color: #00ff88;
  }
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 280px;
    height: 100vh;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    transition: right 0.3s ease;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const NavLink = styled.a`
  color: #cccccc;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #00ff88;
  }
  
  &.active {
    color: #00ff88;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #00ff88;
    transition: width 0.3s ease;
  }
  
  &:hover::after,
  &.active::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
    
    &::after {
      display: none;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileOverlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <>
      <NavBarWrapper scrolled={scrolled}>
        <Container>
          <NavContent>
            <Logo>
              Charles<span>.</span>
            </Logo>
            
            <NavLinks isOpen={mobileMenuOpen}>
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </NavLink>
              ))}
            </NavLinks>
            
            <MobileMenuButton onClick={toggleMobileMenu}>
              {mobileMenuOpen ? '✕' : '☰'}
            </MobileMenuButton>
          </NavContent>
        </Container>
      </NavBarWrapper>
      
      <MobileOverlay 
        isOpen={mobileMenuOpen} 
        onClick={() => setMobileMenuOpen(false)} 
      />
    </>
  );
};

export default NavBar;