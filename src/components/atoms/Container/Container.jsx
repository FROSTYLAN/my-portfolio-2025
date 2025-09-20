import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: ${props => {
    switch (props.maxWidth) {
      case 'sm': return '640px';
      case 'md': return '768px';
      case 'lg': return '1024px';
      case 'xl': return '1280px';
      case '2xl': return '1536px';
      default: return '1200px';
    }
  }};
  margin: 0 auto;
  padding: ${props => props.padding || '0 20px'};
  
  @media (max-width: 768px) {
    padding: ${props => props.mobilePadding || '0 16px'};
  }
  
  @media (max-width: 480px) {
    padding: ${props => props.mobilePadding || '0 12px'};
  }
`;

const Container = ({ 
  maxWidth = 'xl',
  padding,
  mobilePadding,
  children,
  ...props 
}) => {
  return (
    <StyledContainer 
      maxWidth={maxWidth}
      padding={padding}
      mobilePadding={mobilePadding}
      {...props}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;