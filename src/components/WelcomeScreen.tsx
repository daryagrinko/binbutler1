import React from 'react';
import { Recycle, ArrowRight } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
        display: 'inline-flex',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          width: 390,
          height: 884,
          maxWidth: 448,
          minHeight: 884,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 48,
          paddingBottom: 48,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'inline-flex'
        }}>
          <div style={{
            alignSelf: 'stretch',
            height: 357.19,
            minHeight: 262.38,
            paddingTop: 94.81,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            display: 'flex'
          }}>
            <div style={{ alignSelf: 'stretch', height: 262.38, position: 'relative' }}>
              <div style={{
                paddingBottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                top: 120,
                position: 'absolute',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'inline-flex'
              }}>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                  <div style={{
                    width: 280,
                    height: 56,
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#2E7D32',
                    fontSize: 56,
                    fontFamily: 'Manrope',
                    fontWeight: '800',
                    lineHeight: '56px',
                    whiteSpace: 'nowrap'
                  }}>BinButler</div>
                </div>
              </div>
              <div style={{ width: 341.99, height: 70.38, left: '50%', transform: 'translateX(-50%)', top: 192, position: 'absolute' }}>
                <div style={{
                  width: '100%',
                  top: 0.19,
                  position: 'absolute',
                  textAlign: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#191C1D',
                  fontSize: 20,
                  fontFamily: 'Manrope',
                  fontWeight: '300',
                  lineHeight: '35.20px',
                  wordWrap: 'break-word'
                }}>Вынос мусора за пару кликов</div>
              </div>
              <div style={{
                width: 96,
                height: 120,
                paddingBottom: 24,
                left: '50%',
                transform: 'translateX(-50%)',
                top: 0,
                position: 'absolute',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'inline-flex'
              }}>
                <div style={{
                  width: 96,
                  height: 96,
                  position: 'relative',
                  background: 'white',
                  boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.06)',
                  borderRadius: 9999,
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'inline-flex'
                }}>
                  <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                    <Recycle size={56} color="#0D631B" />
                  </div>
                  <div style={{
                    width: 105.60,
                    height: 105.60,
                    left: -4.80,
                    top: -4.80,
                    position: 'absolute',
                    background: 'rgba(13, 99, 27, 0.05)',
                    borderRadius: 9999
                  }} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: 'stretch', height: 64 }} />
          <div style={{
            alignSelf: 'stretch',
            height: 250.81,
            minHeight: 156,
            paddingBottom: 94.81,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 20,
              display: 'flex'
            }}>
              <div style={{
                alignSelf: 'stretch',
                height: 64,
                position: 'relative',
                background: 'linear-gradient(169deg, #0D631B 0%, #2E7D32 100%)',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 8,
                display: 'inline-flex',
                cursor: 'pointer'
              }}>
                <div style={{
                  width: 342,
                  height: 64,
                  left: 0,
                  top: 0,
                  position: 'absolute',
                  background: 'rgba(255, 255, 255, 0)',
                  boxShadow: '0px 4px 6px -4px rgba(13, 99, 27, 0.10), 0px 10px 15px -3px rgba(13, 99, 27, 0.10)',
                  borderRadius: 12
                }} />
                <div style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'Manrope',
                  fontWeight: '700',
                  lineHeight: '28px',
                  wordWrap: 'break-word'
                }}>Я клиент</div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                  <ArrowRight size={20} color="white" />
                </div>
              </div>
              <div style={{
                alignSelf: 'stretch',
                height: 64,
                position: 'relative',
                background: 'linear-gradient(169deg, #0D631B 0%, #2E7D32 100%)',
                boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.06)',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 8,
                display: 'inline-flex',
                cursor: 'pointer'
              }}>
                <div style={{
                  width: 342,
                  height: 64,
                  left: 0,
                  top: 0,
                  position: 'absolute',
                  background: 'white',
                  boxShadow: '0px 4px 6px -4px rgba(13, 99, 27, 0.10), 0px 10px 15px -3px rgba(13, 99, 27, 0.10)',
                  borderRadius: 12
                }} />
                <div style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#191C1D',
                  fontSize: 18,
                  fontFamily: 'Manrope',
                  fontWeight: '700',
                  lineHeight: '28px',
                  wordWrap: 'break-word',
                  zIndex: 1
                }}>Я исполнитель</div>
              </div>
            </div>
          </div>
          <div style={{
            alignSelf: 'stretch',
            paddingTop: 48,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch',
              paddingBottom: 32,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              display: 'flex'
            }}>
              <div style={{
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 8,
                paddingBottom: 8,
                borderRadius: 9999,
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 8.01,
                display: 'inline-flex',
                cursor: 'pointer'
              }}>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#48626E',
                    fontSize: 16,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    lineHeight: '20px',
                    wordWrap: 'break-word'
                  }}>Уже есть аккаунт?</div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#0D631B',
                    fontSize: 16,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    lineHeight: '20px',
                    wordWrap: 'break-word'
                  }}>Войти</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
