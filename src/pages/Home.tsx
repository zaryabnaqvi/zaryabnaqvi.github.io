import { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import FeaturedProject from '@/components/sections/FeaturedProject';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import { Loader } from '@/components/ui/loader';
import Reviews from '@/components/sections/Reviews';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for demonstration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex mx-auto min-w-[100vw] items-center justify-center bg-background">
        <Loader size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background lg:px-5  text-foreground overflow-hidden">
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <FeaturedProject />
        <Projects />
        <Skills />
        <Reviews />
        <Contact />
        <Footer />
      </div>
      
      {/* Gradient background */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
            <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;