
// import logo from './images/Fresh_Thinking_final-02.jpg';
import React, { useEffect,lazy,Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
// import Header from './components/Header';
// import WhoWeAre from './components/WhoWeAre';
// import OurServices from './components/OurServices';
// import OurFocusSegments from './components/OurFocusSegments';
// import Milestones from './components/Milestones';
// import ContacUs from './components/ContacUs';
// import Footer from './components/Footer';

const Header = lazy(()=> import('./components/Header'))
const WhoWeAre = lazy(()=> import('./components/WhoWeAre'))
const OurServices = lazy(()=> import('./components/OurServices'))
const OurFocusSegments = lazy(()=> import('./components/OurFocusSegments'))
const Milestones = lazy(()=> import('./components/Milestones'))
const ContacForEnq = lazy(()=> import('./components/ContactForEnq'))
const Footer = lazy(()=> import('./components/Footer'))
const TermsAndConditions = lazy(()=> import('./components/TermsAndConditions'))
const PrivatePolicy = lazy(()=> import('./components/PrivatePolicy'))
const ContactUs = lazy(()=> import('./components/ContactUs'))



function App() {
  // Scroll animation effect
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 text-gray-800 font-sans transition-all duration-500">
      {/* Header */}
      {/* <header className="text-center py-14 bg-white/80 backdrop-blur-md shadow-md animate-fade-down"> */}
      {/* <Header /> */}
      {/* </header> */}

      {/* About Section */}
     {/* <WhoWeAre /> */}

      {/* Services Section */}
      {/* <OurServices /> */}

      {/* Focus Segments */}
      {/* <OurFocusSegments /> */}

      {/* Milestones */}
      {/* <Milestones /> */}

      {/* Contact Us Section */}
      {/* <ContacUs /> */}

      {/* Footer */}
      {/* <Footer /> */}
      <Suspense
        fallback={<div className="text-center p-10 text-lg">Loading...</div>}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termsAndConditions" element={<TermsAndConditions />} />
          <Route path="/privatePolicy" element={<PrivatePolicy />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/contacForEnq" element={<ContacForEnq />} />
        </Routes>
      </Suspense>
      {/* <Home /> */}
    </div>
  );
}

export default App;