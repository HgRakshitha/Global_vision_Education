import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import AcademicPartners from './components/AcademicPartners';
import WelcomeSection from './components/WelcomeSection';
import Services from './components/Services';
import PopularPrograms from './components/PopularPrograms';
import Consultants from './components/Consultants';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ServicesPage from './components/ServicesPage';
import CoursesPage from './components/CoursesPage';
import ContactUs from './components/ContactUs';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <AcademicPartners />
      <WelcomeSection />
      <Services />
      <PopularPrograms />
      <Consultants />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

