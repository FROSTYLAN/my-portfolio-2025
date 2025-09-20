import styled from 'styled-components';

const IconContainer = styled.div`
  width: ${props => props.size || '80px'};
  height: ${props => props.size || '80px'};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    border-color: #00ff88;
    box-shadow: 0 8px 25px rgba(0, 255, 136, 0.3);
    background: rgba(0, 255, 136, 0.1);
    
    &::before {
      left: 100%;
    }
    
    svg {
      transform: scale(1.1);
    }
  }
  
  svg {
    width: ${props => props.iconSize || '40px'};
    height: ${props => props.iconSize || '40px'};
    transition: transform 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }
  
  @media (max-width: 768px) {
    width: ${props => props.mobileSize || '60px'};
    height: ${props => props.mobileSize || '60px'};
    
    svg {
      width: ${props => props.mobileIconSize || '30px'};
      height: ${props => props.mobileIconSize || '30px'};
    }
  }
  
  @media (max-width: 480px) {
    width: ${props => props.mobileSize || '50px'};
    height: ${props => props.mobileSize || '50px'};
    
    svg {
      width: ${props => props.mobileIconSize || '25px'};
      height: ${props => props.mobileIconSize || '25px'};
    }
  }
`;

const TechIcon = ({ 
  children, 
  size, 
  iconSize, 
  mobileSize, 
  mobileIconSize,
  ...props 
}) => {
  return (
    <IconContainer 
      size={size}
      iconSize={iconSize}
      mobileSize={mobileSize}
      mobileIconSize={mobileIconSize}
      {...props}
    >
      {children}
    </IconContainer>
  );
};

export default TechIcon;