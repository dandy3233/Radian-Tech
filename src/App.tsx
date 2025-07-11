import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Vision from './components/Vision';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChoose />
        <Testimonials />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}

export default App;