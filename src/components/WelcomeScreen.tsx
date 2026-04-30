import React from 'react';
import { Recycle, ArrowRight } from 'lucide-react';
import Button from './Button';

const WelcomeScreen: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#F8FAFB',
      padding: '20px 0'
    }}>
      <div style={{
        width: 390,
        height: 844,
        background: 'linear-gradient(0deg, #F8FAFB 0%, #F8FAFB 100%), white',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0px 0px 20px rgba(0,0,0,0.05)',
        borderRadius: 32
      }}>
        <div style={{
          width: '100%',
          flex: 1,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 48,
          paddingBottom: 24,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex'
        }}>
          {/* Logo and Title Section */}
          <div style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            marginBottom: 40
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

          {/* Buttons Section */}
          <div style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            gap: 20,
            display: 'flex',
            width: '100%'
          }}>
            <Button
              text="Я клиент"
              variant="primary"
              icon={<ArrowRight size={20} color="white" />}
            />
            <Button
              text="Я исполнитель"
              variant="secondary"
            />
          </div>
        </div>

        {/* Footer Section */}
        <div style={{
          width: '100%',
          paddingBottom: 48,
          paddingTop: 24,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex'
        }}>
          <div style={{
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 9999,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
            display: 'flex',
            cursor: 'default'
          }}>
            <span style={{
              color: '#48626E',
              fontSize: 16,
              fontFamily: 'Inter',
              fontWeight: '400',
              lineHeight: '20px'
            }}>Уже есть аккаунт?</span>
            <a href="/login" style={{
              color: '#0D631B',
              fontSize: 16,
              fontFamily: 'Inter',
              fontWeight: '700',
              lineHeight: '20px',
              textDecoration: 'none'
            }}>Войти</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
