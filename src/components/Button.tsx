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
    alignSelf: 'stretch',
    height: 64,
    position: 'relative',
    background: isPrimary
      ? 'linear-gradient(169deg, #0D631B 0%, #2E7D32 100%)'
      : 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    display: 'inline-flex',
    cursor: 'pointer',
    border: isPrimary ? 'none' : '1px solid #E0E0E0',
    boxShadow: isPrimary
      ? '0px 4px 6px -4px rgba(13, 99, 27, 0.10), 0px 10px 15px -3px rgba(13, 99, 27, 0.10)'
      : '0px 4px 24px rgba(0, 0, 0, 0.06)',
    width: '100%',
    padding: '0 24px'
  };

  const textStyle: React.CSSProperties = {
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: isPrimary ? 'white' : '#191C1D',
    fontSize: 18,
    fontFamily: 'Manrope',
    fontWeight: '700',
    lineHeight: '28px',
    wordWrap: 'break-word',
    zIndex: 1
  };

  return (
    <div style={containerStyle} onClick={onClick}>
      <div style={textStyle}>{text}</div>
      {icon && (
        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', zIndex: 1 }}>
          {icon}
        </div>
      )}
    </div>
  );
};

export default Button;
