import styled from 'styled-components';

const StyledLogo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.3s ease;
  display: ${props => props.hideOnDesktop ? 'none' : 'block'};
  
  span {
    color: #00ff88;
  }
  
  &:hover {
    color: #00ff88;
  }
  
  @media (max-width: 768px) {
    display: ${props => props.hideOnMobile ? 'none' : 'block'};
    font-size: 20px;
  }
`;

const Logo = ({ 
  children, 
  onClick, 
  className = '',
  hideOnDesktop = false,
  hideOnMobile = false,
  ...props 
}) => {
  return (
    <StyledLogo 
      className={className}
      onClick={onClick}
      hideOnDesktop={hideOnDesktop}
      hideOnMobile={hideOnMobile}
      {...props}
    >
      {children}
    </StyledLogo>
  );
};

export default Logo;