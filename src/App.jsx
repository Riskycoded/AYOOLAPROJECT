// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landing/LandingPage';
import ContactUs from './Pages/Landing/Sections/contactus';
import Navbar from './components/Navbar';
import './index.css'

function App() {
  return (
    <>
      <Navbar />                   
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;