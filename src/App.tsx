import React from 'react';
import { Bot as Lotus, MapPin, Clock, Phone, Mail, Calendar, Menu, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-cream text-brown-900">
      <Header mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <main>
        <Hero />
        <Services />
        <Process />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;