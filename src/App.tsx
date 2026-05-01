import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen'
import PhoneAuthScreen from './components/PhoneAuthScreen'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/phone" element={<PhoneAuthScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
