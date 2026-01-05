// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landing/LandingPage';
import ContactUs from './Pages/Landing/Sections/contactus';
import Navbar from './components/Navbar';
import './index.css'
import Testimonial from './Pages/Landing/Sections/Testimonial.jsx';

function App() {
  return (
    <>
      <Navbar />                   
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/testimonial" element={<Testimonial />}></Route>
      </Routes>
    </>
  );
}

export default App;