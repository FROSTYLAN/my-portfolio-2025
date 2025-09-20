import styled from 'styled-components';
import { Typography, Button } from '../index';

const ProjectCardWrapper = styled.div`
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
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
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 240px;
  background: ${props => props.bg || '#f5f5f5'};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(transparent, rgba(26, 26, 26, 0.8));
  }
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ProjectContent = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 768px) {
    padding: 20px;
    gap: 12px;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProjectDescription = styled.div`
  flex: 1;
  margin: 8px 0;
`;

const ProjectFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
`;

const TechIcons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TechIcon = styled.div`
  width: 24px;
  height: 24px;
  background: ${props => props.bg || '#666'};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 10px;
  }
`;

const DemoButton = styled(Button)`
  padding: 8px 16px;
  font-size: 14px;
  min-width: 120px;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies = [], 
  demoUrl,
  onDemoClick,
  ...props 
}) => {
  const handleDemoClick = () => {
    if (onDemoClick) {
      onDemoClick();
    } else if (demoUrl) {
      window.open(demoUrl, '_blank');
    }
  };

  return (
    <ProjectCardWrapper {...props}>
      <ProjectImage src={image} />
      
      <ProjectContent>
        <ProjectHeader>
          <Typography 
            variant="h3" 
            color="#ffffff"
            style={{ 
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              fontWeight: '600'
            }}
          >
            {title}
          </Typography>
        </ProjectHeader>
        
        <ProjectDescription>
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
        </ProjectDescription>
        
        <ProjectFooter>
          <TechIcons>
            {technologies.map((tech, index) => (
              <TechIcon key={index} bg={tech.color} title={tech.name}>
                {tech.icon}
              </TechIcon>
            ))}
          </TechIcons>
          
          <DemoButton 
            variant="outline"
            onClick={handleDemoClick}
          >
            Ver Demo →
          </DemoButton>
        </ProjectFooter>
      </ProjectContent>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;