import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Vision from './components/Vision';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
// import PrivacyPolicy from './components/PrivacyPolicy';
import ConnectWithUs from './components/ConnectWithUs';

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
      <ConnectWithUs />
      {/* Uncomment the line below to include Privacy Policy */}
      {/* <PrivacyPolicy /> */}
      <Footer />
    </div>
  );
}

export default App;