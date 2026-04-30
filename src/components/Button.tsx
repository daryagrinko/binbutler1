import React from 'react';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  iconPosition?: 'right' | 'absolute';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, variant = 'primary', icon, iconPosition = 'absolute', onClick, disabled = false }) => {
  const isPrimary = variant === 'primary';

  const containerStyle: React.CSSProperties = {
    width: 342,
    height: 64,
    position: 'relative',
    background: disabled
      ? '#E1E3E4'
      : isPrimary
        ? 'linear-gradient(169deg, #0D631B 0%, #2E7D32 100%)'
        : 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: isPrimary || disabled ? 'none' : '1px solid rgba(13, 99, 27, 0.10)',
    boxShadow: disabled
      ? 'none'
      : isPrimary
        ? '0px 4px 6px -4px rgba(13, 99, 27, 0.10), 0px 10px 15px -3px rgba(13, 99, 27, 0.10)'
        : '0px 4px 24px rgba(0, 0, 0, 0.06)',
    pointerEvents: disabled ? 'none' : 'auto',
  };

  const textStyle: React.CSSProperties = {
    textAlign: 'center',
    color: disabled ? '#A1A3A4' : (isPrimary ? 'white' : '#191C1D'),
    fontSize: 18,
    fontFamily: 'Manrope',
    fontWeight: '700',
    lineHeight: '28px',
    zIndex: 1
  };

  return (
    <div style={containerStyle} onClick={disabled ? undefined : onClick}>
      <div style={textStyle}>{text}</div>
      {icon && (
        <div style={iconPosition === 'absolute' ? {
          position: 'absolute',
          right: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1
        } : {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          marginLeft: 8
        }}>
          {icon}
        </div>
      )}
    </div>
  );
};

export default Button;
