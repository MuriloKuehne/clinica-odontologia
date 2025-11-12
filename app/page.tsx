import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import MedicalTeam from './components/MedicalTeam';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Specialties />
      <MedicalTeam />
      <Testimonials />
      <Contact />
      <Location />
      <Footer />
    </main>
  );
}

