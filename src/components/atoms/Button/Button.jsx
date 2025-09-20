import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${props => {
    switch (props.size) {
      case 'small': return '8px 16px';
      case 'large': return '16px 32px';
      default: return '12px 24px';
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '0.875rem';
      case 'large': return '1.125rem';
      default: return '1rem';
    }
  }};
  font-weight: 600;
  border-radius: ${props => props.borderRadius || '8px'};
  border: ${props => {
    switch (props.variant) {
      case 'outline': return `2px solid ${props.color || '#00ff88'}`;
      case 'ghost': return 'none';
      default: return 'none';
    }
  }};
  background: ${props => {
    switch (props.variant) {
      case 'outline': return 'transparent';
      case 'ghost': return 'transparent';
      default: return props.color || '#00ff88';
    }
  }};
  color: ${props => {
    switch (props.variant) {
      case 'outline': return props.color || '#00ff88';
      case 'ghost': return props.color || '#00ff88';
      default: return '#000000';
    }
  }};
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 255, 136, 0.3);
    
    ${props => props.variant === 'outline' && `
      background: ${props.color || '#00ff88'};
      color: #000000;
    `}
    
    ${props => props.variant === 'ghost' && `
      background: rgba(0, 255, 136, 0.1);
    `}
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
  
  @media (max-width: 768px) {
    padding: ${props => {
      switch (props.size) {
        case 'small': return '10px 20px';
        case 'large': return '14px 28px';
        default: return '12px 24px';
      }
    }};
    font-size: ${props => {
      switch (props.size) {
        case 'small': return '0.875rem';
        case 'large': return '1rem';
        default: return '0.9rem';
      }
    }};
  }
`;

const Button = ({ 
  variant = 'primary', 
  size = 'medium',
  color,
  borderRadius,
  children, 
  onClick,
  disabled,
  type = 'button',
  ...props 
}) => {
  return (
    <StyledButton 
      variant={variant}
      size={size}
      color={color}
      borderRadius={borderRadius}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;