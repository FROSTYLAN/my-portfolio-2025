import styled from 'styled-components';
import { Typography } from '../index';

const ExperienceCardWrapper = styled.div`
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00ff88, #00cc6a);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 16px 16px 0 0;
  }
  
  &:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 255, 136, 0.3);
    box-shadow: 0 20px 40px rgba(0, 255, 136, 0.1);
    background: rgba(26, 26, 26, 0.95);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    padding: 24px;
    gap: 16px;
    flex-direction: column;
    text-align: center;
    
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.bg || 'linear-gradient(135deg, #00ff88, #00cc6a)'};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  ${ExperienceCardWrapper}:hover & {
    &::before {
      transform: translateX(100%);
    }
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    border-radius: 12px;
  }
`;

const IconSvg = styled.svg`
  width: 40px;
  height: 40px;
  fill: white;
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ExperienceCard = ({ 
  title, 
  description, 
  icon,
  iconBg,
  ...props 
}) => {
  return (
    <ExperienceCardWrapper {...props}>
      <IconContainer bg={iconBg}>
        {typeof icon === 'string' ? (
          <IconSvg viewBox="0 0 24 24">
            <path d={icon} />
          </IconSvg>
        ) : (
          icon
        )}
      </IconContainer>
      
      <ContentContainer>
        <Typography 
          variant="h3" 
          color="#ffffff"
          style={{ 
            fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
            fontWeight: '600',
            marginBottom: '8px'
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="body" 
          color="#cccccc"
          style={{ 
            lineHeight: '1.6',
            fontSize: 'clamp(0.875rem, 2vw, 0.95rem)'
          }}
        >
          {description}
        </Typography>
      </ContentContainer>
    </ExperienceCardWrapper>
  );
};

export default ExperienceCard;