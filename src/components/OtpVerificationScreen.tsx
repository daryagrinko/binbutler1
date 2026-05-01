import React, { useState, useRef } from 'react';
import { ArrowLeft, Lock, RotateCcw } from 'lucide-react';

interface OtpVerificationScreenProps {
  onBack?: () => void;
  onConfirm?: () => void;
}

const OtpVerificationScreen: React.FC<OtpVerificationScreenProps> = ({ onBack, onConfirm }) => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Логика ввода и переключения фокуса
  const handleChange = (index: number, value: string) => {
    // Разрешаем только цифры
    const val = value.replace(/[^0-9]/g, '');
    if (!val) {
      const newCode = [...code];
      newCode[index] = '';
      setCode(newCode);
      return;
    }

    const newCode = [...code];
    newCode[index] = val.slice(-1); // Берем только последний символ
    setCode(newCode);

    // Прыгаем на следующий инпут
    if (index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Логика стирания (прыжок назад)
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (code[index] === '') {
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
          const newCode = [...code];
          newCode[index - 1] = '';
          setCode(newCode);
        }
      } else {
        const newCode = [...code];
        newCode[index] = '';
        setCode(newCode);
      }
    }
  };

  const isCodeComplete = code.every(digit => digit !== '');

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
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F8FAFB',
        fontFamily: 'Manrope, sans-serif',
        overflow: 'hidden',
        position: 'relative'
      }}>

        {/* HEADER */}
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
            onClick={onBack}
            style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
          >
             <ArrowLeft size={16} color="#166534" />
          </div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#191C1D' }}>Введите код</div>
        </div>

        {/* CONTENT */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '24px',
          paddingRight: '24px'
        }}>

          {/* Иконка замка */}
          <div style={{ width: '96px', height: '96px', background: '#F2F4F5', borderRadius: '24px', marginBottom: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Lock size={32} color="#2E7D32" fill="#2E7D32" fillOpacity={0.1} />
          </div>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#191C1D', lineHeight: '36px', marginBottom: '12px', margin: 0 }}>
              Безопасный вход
            </h2>
            <p style={{ fontSize: '14px', color: '#48626E', margin: 0, marginTop: 12 }}>
              Отправили код на <span style={{ color: '#40493D', fontWeight: '500' }}>+995...</span>
            </p>
          </div>

          {/* 4 ПОЛЯ ВВОДА */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
            {code.map((digit, index) => (
              <input
                key={index}
                ref={el => inputRefs.current[index] = el}
                type="text"
                inputMode="numeric"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                placeholder="·"
                style={{
                  width: '64px',
                  height: '80px',
                  background: '#E1E3E4',
                  borderRadius: '12px',
                  border: 'none',
                  textAlign: 'center',
                  fontSize: '30px',
                  fontWeight: '700',
                  color: '#191C1D',
                  outline: 'none'
                }}
              />
            ))}
          </div>

          {/* Отправить повторно */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <RotateCcw size={16} color="#0D631B" />
            <span style={{ color: '#0D631B', fontSize: '14px', fontWeight: '600' }}>Отправить код повторно</span>
          </div>

        </div>

        {/* FOOTER */}
        <div style={{ padding: '24px', paddingBottom: '40px' }}>
          <button
            onClick={onConfirm}
            disabled={!isCodeComplete}
            style={{
              width: '100%',
              height: '64px',
              background: isCodeComplete ? 'linear-gradient(169deg, #0D631B 0%, #2E7D32 100%)' : '#E1E3E4',
              color: isCodeComplete ? 'white' : '#40493D',
              border: 'none',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '700',
              cursor: isCodeComplete ? 'pointer' : 'not-allowed',
              opacity: isCodeComplete ? 1 : 1, // Using style directly instead of opacity for consistency with previous designs
              boxShadow: isCodeComplete ? '0px 10px 15px -3px rgba(13, 99, 27, 0.2)' : 'none',
              transition: 'all 0.3s ease',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            Подтвердить →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationScreen;
