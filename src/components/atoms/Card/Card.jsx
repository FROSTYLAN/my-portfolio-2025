import styled from 'styled-components';

const StyledCard = styled.div`
  background: ${props => props.background || 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.borderColor || 'rgba(255, 255, 255, 0.1)'};
  border-radius: ${props => props.borderRadius || '16px'};
  padding: ${props => props.padding || '32px'};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: ${props => props.height || 'auto'};
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.accentColor || 'linear-gradient(90deg, #00ff88, #00cc6a)'};
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    border-color: ${props => props.hoverBorderColor || 'rgba(0, 255, 136, 0.3)'};
    box-shadow: 0 12px 40px rgba(0, 255, 136, 0.15);
    background: ${props => props.hoverBackground || 'rgba(0, 255, 136, 0.05)'};
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    padding: ${props => props.mobilePadding || '24px'};
    
    &:hover {
      transform: translateY(-4px);
    }
  }
  
  @media (max-width: 480px) {
    padding: ${props => props.mobilePadding || '20px'};
  }
`;

const CardHeader = styled.div`
  margin-bottom: ${props => props.marginBottom || '20px'};
  display: flex;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    margin-bottom: ${props => props.mobileMarginBottom || '16px'};
  }
`;

const CardIcon = styled.div`
  width: ${props => props.size || '12px'};
  height: ${props => props.size || '12px'};
  background: ${props => props.color || '#00ff88'};
  border-radius: 50%;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: ${props => props.mobileSize || '10px'};
    height: ${props => props.mobileSize || '10px'};
  }
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || '16px'};
`;

const Card = ({ 
  children,
  background,
  borderColor,
  borderRadius,
  padding,
  mobilePadding,
  height,
  accentColor,
  hoverBorderColor,
  hoverBackground,
  showIcon = false,
  iconColor,
  iconSize,
  mobileIconSize,
  title,
  headerMarginBottom,
  mobileHeaderMarginBottom,
  contentGap,
  ...props 
}) => {
  return (
    <StyledCard 
      background={background}
      borderColor={borderColor}
      borderRadius={borderRadius}
      padding={padding}
      mobilePadding={mobilePadding}
      height={height}
      accentColor={accentColor}
      hoverBorderColor={hoverBorderColor}
      hoverBackground={hoverBackground}
      {...props}
    >
      {(showIcon || title) && (
        <CardHeader 
          marginBottom={headerMarginBottom}
          mobileMarginBottom={mobileHeaderMarginBottom}
        >
          {showIcon && (
            <CardIcon 
              color={iconColor}
              size={iconSize}
              mobileSize={mobileIconSize}
            />
          )}
          {title}
        </CardHeader>
      )}
      
      <CardContent gap={contentGap}>
        {children}
      </CardContent>
    </StyledCard>
  );
};

export default Card;