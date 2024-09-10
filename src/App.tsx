
import Hero from './components/Hero';
import TravelSlider from './components/TravelSlider';
import Testimonios from './components/Testimonios.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Hero />
      <TravelSlider />
      <Testimonios />
      <Footer />
    </div>
  );
}

export default App;
