import styled from 'styled-components';
import { NavLink } from '../../atoms';

const NavigationWrapper = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Navigation = ({ 
  items = [], 
  activeSection = '', 
  onItemClick,
  className = '',
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

  return (
    <NavigationWrapper className={className} {...props}>
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          isActive={activeSection === item.id}
          onClick={() => handleItemClick(item)}
        >
          {item.label}
        </NavLink>
      ))}
    </NavigationWrapper>
  );
};

export default Navigation;