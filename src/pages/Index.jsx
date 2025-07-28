import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen font-inter overflow-x-hidden">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;