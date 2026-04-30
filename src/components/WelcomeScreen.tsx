import React from 'react';
import { Recycle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/phone');
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#F8FAFB'
    }}>
      <div style={{
        width: 390,
        height: 844,
        background: 'linear-gradient(0deg, #F8FAFB 0%, #F8FAFB 100%), white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          width: '100%',
          paddingLeft: 24,
          paddingRight: 24,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          gap: 40
        }}>
          {/* Logo and Title Section */}
          <div style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
          }}>
            <div style={{
              width: 96,
              height: 96,
              background: 'white',
              boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.06)',
              borderRadius: 9999,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              position: 'relative',
              marginBottom: 24
            }}>
              <Recycle size={56} color="#0D631B" />
              <div style={{
                width: 105.60,
                height: 105.60,
                position: 'absolute',
                background: 'rgba(13, 99, 27, 0.05)',
                borderRadius: 9999
              }} />
            </div>

            <div style={{
              color: '#2E7D32',
              fontSize: 56,
              fontFamily: 'Manrope',
              fontWeight: '800',
              lineHeight: '56px',
              textAlign: 'center',
              marginBottom: 16
            }}>BinButler</div>

            <div style={{
              color: '#191C1D',
              fontSize: 20,
              fontFamily: 'Manrope',
              fontWeight: '300',
              lineHeight: '35.20px',
              textAlign: 'center'
            }}>Вынос мусора за пару кликов</div>
          </div>

          {/* Buttons and Footer Section */}
          <div style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            alignItems: 'center',
            display: 'flex',
            gap: 20
          }}>
            <Button
              text="Я клиент"
              variant="primary"
              onClick={handleNavigate}
            />
            <Button
              text="Я исполнитель"
              variant="secondary"
              onClick={handleNavigate}
            />

            <div style={{
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              gap: 8
            }}>
              <span style={{
                color: '#48626E',
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: '400',
                lineHeight: '20px'
              }}>Уже есть аккаунт?</span>
              <span
                onClick={handleNavigate}
                style={{
                  color: '#0D631B',
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  lineHeight: '20px',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >Войти</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
