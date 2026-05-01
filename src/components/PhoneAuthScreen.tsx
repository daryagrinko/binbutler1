import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PhoneAuthScreenProps {
  onContinue?: () => void;
}

const PhoneAuthScreen: React.FC<PhoneAuthScreenProps> = ({ onContinue }) => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  const isValid = phone.length >= 9;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhone(value);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: '#F8FAFB',
      fontFamily: 'Manrope, sans-serif',
      overflow: 'hidden',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: 390,
        height: 844,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F8FAFB',
        fontFamily: 'Manrope, sans-serif',
        overflow: 'hidden',
        position: 'relative'
      }}>

        {/* HEADER: Всегда прижат к верху */}
        <div style={{
          paddingTop: '50px',
          paddingBottom: '24px',
          paddingLeft: '24px',
          paddingRight: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div
            onClick={() => navigate('/')}
            style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
          >
             <ArrowLeft size={16} color="#166534" />
          </div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#191C1D' }}>Введите номер</div>
        </div>

        {/* CONTENT: Центрируется в оставшемся пространстве */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '24px',
          paddingRight: '24px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#191C1D', lineHeight: '36px', marginBottom: '12px', margin: 0 }}>
              Введите номер телефона
            </h2>
            <p style={{ fontSize: '14px', color: '#40493D', lineHeight: '26px', margin: 0, marginTop: 12 }}>
              Мы отправим вам код подтверждения в СМС
            </p>
          </div>

          {/* INPUT GROUP */}
          <div style={{
            display: 'flex',
            backgroundColor: '#E1E3E4',
            borderRadius: '12px',
            overflow: 'hidden',
            alignItems: 'center',
            height: 64
          }}>
            <div style={{ padding: '16px', borderRight: '1px solid rgba(191, 202, 186, 0.3)', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '20px' }}>🇬🇪</span>
              <span style={{ fontWeight: '500', color: '#191C1D', fontSize: '16px', fontFamily: 'Inter' }}>+995</span>
            </div>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="5XX XXX XXX"
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                padding: '16px',
                fontSize: '18px',
                outline: 'none',
                color: '#191C1D',
                fontFamily: 'Inter'
              }}
            />
          </div>
        </div>

        {/* FOOTER: Всегда прижат к низу */}
        <div style={{ padding: '24px', paddingBottom: '40px' }}>
          <button
            onClick={onContinue}
            disabled={!isValid}
            style={{
              width: '100%',
              height: '64px',
              background: isValid ? 'linear-gradient(169deg, #0D631B 0%, #2E7D32 100%)' : '#E1E3E4',
              color: isValid ? 'white' : '#40493D',
              border: 'none',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '700',
              boxShadow: isValid ? '0px 10px 15px -3px rgba(13, 99, 27, 0.2)' : 'none',
              cursor: isValid ? 'pointer' : 'not-allowed',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'Manrope'
            }}
          >
            Продолжить
            <ArrowRight size={16} color={isValid ? "white" : "#40493D"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneAuthScreen;
