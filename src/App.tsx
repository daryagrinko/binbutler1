import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen'
import PhoneInputScreen from './components/PhoneInputScreen'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/phone" element={<PhoneInputScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
