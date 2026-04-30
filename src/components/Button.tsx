import React from 'react';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, variant = 'primary', icon, onClick }) => {
  const isPrimary = variant === 'primary';

  const containerStyle: React.CSSProperties = {
    width: 342,
    height: 64,
    position: 'relative',
    background: isPrimary
      ? 'linear-gradient(169deg, #0D631B 0%, #2E7D32 100%)'
      : 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    border: isPrimary ? 'none' : '1px solid rgba(13, 99, 27, 0.10)',
    boxShadow: isPrimary
      ? '0px 4px 6px -4px rgba(13, 99, 27, 0.10), 0px 10px 15px -3px rgba(13, 99, 27, 0.10)'
      : '0px 4px 24px rgba(0, 0, 0, 0.06)',
  };

  const textStyle: React.CSSProperties = {
    textAlign: 'center',
    color: isPrimary ? 'white' : '#191C1D',
    fontSize: 18,
    fontFamily: 'Manrope',
    fontWeight: '700',
    lineHeight: '28px',
    zIndex: 1
  };

  return (
    <div style={containerStyle} onClick={onClick}>
      <div style={textStyle}>{text}</div>
      {icon && (
        <div style={{
          position: 'absolute',
          right: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1
        }}>
          {icon}
        </div>
      )}
    </div>
  );
};

export default Button;
