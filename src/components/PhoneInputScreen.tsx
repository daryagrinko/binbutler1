import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import _PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Button from './Button';

// Handle potential ESM/CJS interop issues
const PhoneInput = (typeof _PhoneInput === 'function' ? _PhoneInput : (_PhoneInput as any).default) as any;

const PhoneInputScreen: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handlePhoneChange = (value: string, country: any) => {
    setPhone(value);
    // Simple validation: check if the length matches expected length for the country or at least 10 digits
    // react-phone-input-2 provides more complex validation if needed, but this is a good start.
    if (value.length >= 10) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
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
      <style>{`
        .react-tel-input .form-control {
          width: 100% !important;
          height: 60px !important;
          background: #E1E3E4 !important;
          border: none !important;
          border-radius: 6px !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 18px !important;
          padding-left: 100px !important;
          color: #191C1D !important;
        }
        .react-tel-input .flag-dropdown {
          background: #E1E3E4 !important;
          border: none !important;
          border-right: 1px solid rgba(191, 202, 186, 0.5) !important;
          border-radius: 6px 0 0 6px !important;
          width: 90px !important;
        }
        .react-tel-input .selected-flag {
          width: 100% !important;
          display: flex !important;
          justify-content: center !important;
          gap: 4px !important;
        }
        .react-tel-input .selected-flag .flag {
          transform: scale(1.5);
        }
      `}</style>

      <div style={{
        width: 390,
        height: 844,
        background: 'linear-gradient(0deg, #F8FAFB 0%, #F8FAFB 100%), white',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        display: 'inline-flex',
        position: 'relative'
      }}>
        {/* Figma Pure Layout Start */}
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
          <div style={{width: 390, height: 112, position: 'relative'}}>
            <div
              onClick={() => navigate('/')}
              style={{width: 40, height: 40, left: 24, top: 48, position: 'absolute', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex', cursor: 'pointer'}}
            >
              <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <ArrowLeft size={24} color="#166534" />
              </div>
            </div>
            <div style={{left: 64, top: 50, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
              <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#191C1D', fontSize: 24, fontFamily: 'Manrope', fontWeight: '800', lineHeight: '36px', wordWrap: 'break-word'}}>Введите номер</div>
            </div>
            <div style={{width: 96, height: 20, left: 269, top: 58, position: 'absolute'}} />
            <div style={{width: 390, height: 50, left: 0, top: 0, position: 'absolute'}} />
          </div>
        </div>

        <div style={{width: 390, paddingTop: 125, paddingBottom: 172, paddingLeft: 24, paddingRight: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
          <div style={{width: '100%', maxWidth: 448, paddingBottom: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#191C1D', fontSize: 32, fontFamily: 'Manrope', fontWeight: '800', lineHeight: '36px', wordWrap: 'break-word'}}>Введите номер телефона</div>
              </div>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#40493D', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '26px', wordWrap: 'break-word'}}>Мы отправим вам код подтверждения в СМС</div>
              </div>
            </div>

            {/* Phone Input Library Integration */}
            <div style={{alignSelf: 'stretch', paddingBottom: 56, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <PhoneInput
                country={'ge'}
                value={phone}
                onChange={handlePhoneChange}
                placeholder="5XX XXX XXX"
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true
                }}
              />

              <div style={{width: 390, height: 110, padding: 24, left: -24, top: 316, position: 'absolute', background: 'linear-gradient(0deg, #F8FAFB 0%, rgba(248, 250, 251, 0) 100%)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <Button
                  text="Продолжить"
                  variant="primary"
                  disabled={!isValid}
                  icon={<ArrowRight size={20} color={isValid ? "white" : "#A1A3A4"} />}
                  iconPosition="right"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Figma Pure Layout End */}
      </div>
    </div>
  );
};

export default PhoneInputScreen;
