import styled from 'styled-components';

const StyledTypography = styled.div`
  font-family: ${props => props.fontFamily || 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'};
  font-size: ${props => {
    switch (props.variant) {
      case 'h1': return 'clamp(2rem, 5vw, 4rem)';
      case 'h2': return 'clamp(1.5rem, 4vw, 3rem)';
      case 'h3': return 'clamp(1.25rem, 3vw, 2rem)';
      case 'subtitle': return 'clamp(1rem, 2.5vw, 1.25rem)';
      case 'body': return 'clamp(0.875rem, 2vw, 1rem)';
      default: return '1rem';
    }
  }};
  font-weight: ${props => {
    switch (props.variant) {
      case 'h1':
      case 'h2':
      case 'h3': return '700';
      case 'subtitle': return '600';
      case 'body': return '400';
      default: return '400';
    }
  }};
  line-height: ${props => {
    switch (props.variant) {
      case 'h1':
      case 'h2':
      case 'h3': return '1.2';
      case 'subtitle': return '1.4';
      case 'body': return '1.6';
      default: return '1.5';
    }
  }};
  color: ${props => props.color || '#ffffff'};
  text-align: ${props => props.align || 'left'};
  margin: ${props => props.margin || '0'};
  
  @media (max-width: 768px) {
    text-align: ${props => props.mobileAlign || props.align || 'left'};
  }
`;

const Typography = ({ 
  variant = 'body', 
  children, 
  color, 
  align, 
  mobileAlign,
  margin,
  fontFamily,
  ...props 
}) => {
  return (
    <StyledTypography 
      variant={variant}
      color={color}
      align={align}
      mobileAlign={mobileAlign}
      margin={margin}
      fontFamily={fontFamily}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;