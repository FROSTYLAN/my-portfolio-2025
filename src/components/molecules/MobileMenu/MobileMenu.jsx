import styled from 'styled-components';
import { NavLink } from '../../atoms';

const MobileMenuWrapper = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-100%'};
  width: 280px;
  height: 100vh;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  transition: right 0.3s ease;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
`;

const MobileOverlay = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const MobileNavLink = styled(NavLink)`
  font-size: 18px;
  
  &::after {
    display: none;
  }
`;

const MobileMenu = ({ 
  isOpen = false,
  items = [],
  activeSection = '',
  onItemClick,
  onOverlayClick,
  ...props 
}) => {
  const defaultItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const navItems = items.length > 0 ? items : defaultItems;

  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item.id);
    }
  };

  const handleOverlayClick = () => {
    if (onOverlayClick) {
      onOverlayClick();
    }
  };

  return (
    <MobileMenuWrapper {...props}>
      <MobileOverlay 
        isOpen={isOpen} 
        onClick={handleOverlayClick}
      />
      
      <MobileMenuContainer isOpen={isOpen}>
        {navItems.map((item) => (
          <MobileNavLink
            key={item.id}
            isActive={activeSection === item.id}
            onClick={() => handleItemClick(item)}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </MobileMenuContainer>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;