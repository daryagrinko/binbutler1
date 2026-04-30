import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PhoneInputScreen: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhone(value);
    setIsValid(value.length >= 9);
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
      <div style={{width: 390, height: 844, paddingBottom: 122, background: 'linear-gradient(0deg, #F8FAFB 0%, #F8FAFB 100%), white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex', position: 'relative'}}>
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
          <div style={{width: 390, paddingTop: 50, paddingBottom: 24, paddingLeft: 24, paddingRight: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div
              onClick={() => navigate('/')}
              style={{width: 40, height: 40, borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'flex', cursor: 'pointer'}}
            >
              <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <ArrowLeft size={16} color="#166534" />
              </div>
            </div>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
              <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#191C1D', fontSize: 24, fontFamily: 'Manrope', fontWeight: '800', lineHeight: '36px', wordWrap: 'break-word'}}>Введите номер</div>
            </div>
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
            <div style={{alignSelf: 'stretch', paddingBottom: 56, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', background: '#E1E3E4', overflow: 'hidden', borderRadius: 6, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{padding: 16, borderRight: '1px rgba(191, 202, 186, 0.15) solid', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                  <div style={{paddingRight: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                      <div style={{width: 35.41, height: 28, textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#191C1D', fontSize: 20, fontWeight: '400', lineHeight: '28px', wordWrap: 'break-word'}}>🇬🇪</div>
                    </div>
                  </div>
                  <div style={{paddingRight: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                      <div style={{width: 40.48, height: 24, textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#191C1D', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: '24px', wordWrap: 'break-word'}}>+995</div>
                    </div>
                  </div>
                  <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{width: 7, height: 4.32, background: '#40493D'}} />
                  </div>
                </div>
                <div style={{width: 291, paddingTop: 19, paddingBottom: 20, paddingLeft: 16, paddingRight: 16, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                  <div style={{alignSelf: 'stretch', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="5XX XXX XXX"
                      style={{
                        alignSelf: 'stretch',
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#191C1D',
                        fontSize: 18,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        wordWrap: 'break-word',
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        padding: 0
                      }}
                    />
                  </div>
                </div>
              </div>
              <div style={{width: 390, height: 110, padding: 24, left: -24, top: 317, position: 'absolute', background: 'linear-gradient(0deg, #F8FAFB 0%, rgba(248, 250, 251, 0) 100%)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', height: 64, position: 'relative', background: isValid ? 'linear-gradient(169deg, #0D631B 0%, #2E7D32 100%)' : '#E1E3E4', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex', cursor: isValid ? 'pointer' : 'not-allowed'}}>
                  <div style={{width: 342, height: 64, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0)', boxShadow: isValid ? '0px 4px 6px -4px rgba(13, 99, 27, 0.10), 0px 10px 15px -3px rgba(13, 99, 27, 0.10)' : 'none', borderRadius: 12}} />
                  <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: isValid ? 'white' : '#A1A3A4', fontSize: 18, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word', zIndex: 1}}>Продолжить</div>
                  <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', zIndex: 1}}>
                    <ArrowRight size={16} color={isValid ? "white" : "#A1A3A4"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneInputScreen;
