import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from 'lucide-react';
import { fadeIn, slideUp } from '@/lib/animations';
import resume from '@/assets/Syed-Muhammad-Zaryab--Resume.pdf';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-20 px-4 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col items-start space-y-6 md:w-3/4"
        >
          <motion.h2 
            variants={slideUp}
            className="font-medium text-primary/80"
          >
            Hello, I'm
          </motion.h2>
          
          <motion.h1 
            variants={slideUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Syed Muhammad Zaryab
          </motion.h1>
          
          <motion.h3 
            variants={slideUp}
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80"
          >
            Software Engineer & Full Stack Developer
          </motion.h3>
          
          <motion.p 
            variants={slideUp}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            I build exceptional web applications with modern technologies. Currently focusing on MERN/MEAN stacks and creating immersive user experiences.
          </motion.p>
          
          <motion.div 
            variants={slideUp}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button asChild variant="default" size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                Resume <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            variants={slideUp}
            className="flex gap-6 pt-4"
          >
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/zaryabnaqvi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/syed-muhammad-zaryab-069391249/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:zaryab.110786@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 20 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button variant="ghost"  className="animate-bounce" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;