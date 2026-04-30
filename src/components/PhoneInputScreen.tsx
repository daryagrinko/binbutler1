import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const PhoneInputScreen: React.FC = () => {
  const navigate = useNavigate();

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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Header Section */}
        <div style={{ alignSelf: 'stretch', height: 112, position: 'relative' }}>
          <div
            onClick={() => navigate(-1)}
            style={{
              width: 40,
              height: 40,
              left: 24,
              top: 48,
              position: 'absolute',
              borderRadius: 9999,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              cursor: 'pointer',
              background: 'rgba(22, 101, 52, 0.05)'
            }}
          >
            <ArrowLeft size={20} color="#166534" />
          </div>
          <div style={{
            left: 72,
            top: 50,
            position: 'absolute',
            color: '#191C1D',
            fontSize: 24,
            fontFamily: 'Manrope',
            fontWeight: '800',
            lineHeight: '36px'
          }}>Введите номер</div>
        </div>

        {/* Content Section */}
        <div style={{
          flex: 1,
          width: '100%',
          paddingTop: 125,
          paddingLeft: 24,
          paddingRight: 24,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          display: 'flex',
          gap: 40
        }}>
          <div style={{ alignSelf: 'stretch', flexDirection: 'column', gap: 12, display: 'flex' }}>
            <div style={{
              textAlign: 'center',
              color: '#191C1D',
              fontSize: 32,
              fontFamily: 'Manrope',
              fontWeight: '800',
              lineHeight: '36px'
            }}>Введите номер<br/>телефона</div>
            <div style={{
              textAlign: 'center',
              color: '#40493D',
              fontSize: 14,
              fontFamily: 'Inter',
              fontWeight: '400',
              lineHeight: '26px'
            }}>Мы отправим вам код подтверждения в СМС</div>
          </div>

          {/* Input Section */}
          <div style={{
            alignSelf: 'stretch',
            height: 60,
            background: '#E1E3E4',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              padding: '0 16px',
              borderRight: '1px solid rgba(191, 202, 186, 0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              <span style={{ fontSize: 20 }}>🇬🇪</span>
              <span style={{
                color: '#191C1D',
                fontSize: 16,
                fontFamily: 'Inter',
                fontWeight: '500'
              }}>+995</span>
              <div style={{
                width: 0,
                height: 0,
                borderLeft: '4px solid transparent',
                borderRight: '4px solid transparent',
                borderTop: '4px solid #40493D',
                marginTop: 2
              }} />
            </div>
            <div style={{
              flex: 1,
              padding: '0 16px',
              color: 'rgba(64, 73, 61, 0.50)',
              fontSize: 18,
              fontFamily: 'Inter',
              fontWeight: '400'
            }}>
              5XX XXX XXX
            </div>
          </div>
        </div>

        {/* Fixed Bottom Button Section */}
        <div style={{
          width: '100%',
          padding: 24,
          paddingBottom: 48,
          background: 'linear-gradient(0deg, #F8FAFB 0%, rgba(248, 250, 251, 0) 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0
        }}>
          <Button
            text="Продолжить"
            variant="primary"
            icon={<ArrowRight size={20} color="white" />}
            iconPosition="right"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneInputScreen;
