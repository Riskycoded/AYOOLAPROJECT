// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landing/LandingPage';
import Navbar from './components/Navbar';
import './index.css'

function App() {
  return (
    <>
      <Navbar />                   
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;