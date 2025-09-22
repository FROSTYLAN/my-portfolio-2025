import styled from 'styled-components';

const StyledNavLink = styled.a`
  color: #cccccc;
  text-decoration: none;
  font-size: 14px;
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

const NavLink = ({ 
  children, 
  onClick, 
  isActive = false, 
  className = '',
  ...props 
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledNavLink 
      className={`${isActive ? 'active' : ''} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledNavLink>
  );
};

export default NavLink;