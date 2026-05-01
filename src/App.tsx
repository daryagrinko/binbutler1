import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen'
import PhoneAuthScreen from './components/PhoneAuthScreen'
import OtpVerificationScreen from './components/OtpVerificationScreen'
import './App.css'

function AppRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/phone" element={<PhoneAuthScreen onContinue={() => navigate('/otp')} />} />
      <Route path="/otp" element={<OtpVerificationScreen onBack={() => navigate('/phone')} onConfirm={() => console.log('OTP confirmed')} />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
