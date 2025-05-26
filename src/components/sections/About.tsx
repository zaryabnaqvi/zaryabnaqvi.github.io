import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/section-heading';
import { fadeIn } from '@/lib/animations';
import imagePortfolio from '@/assets/1744190289646-103928492.jpg';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="about" className="py-20 px-4 w-full relative">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading title="About Me" subtitle="My Background & Interests" />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <div className="md:col-span-1">
            <Card className="h-full border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col h-full justify-center">
               
                  {/* Placeholder for profile image */}
                  <img
                    src={imagePortfolio}
                    alt="Profile"
                    className="object-cover w-full h-full transition-transform aspect-square rounded-xl overflow-hidden mb-4 bg-muted/30 duration-300 transform hover:scale-105"
                    loading="lazy"
                  />
                  {/* Fallback content if image fails to load */}
                  
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-medium text-muted-foreground">Location</h3>
                    <p>Karachi, Pakistan</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-muted-foreground">Education</h3>
                    <p>BS Computer Science</p>
                    <p className="text-sm text-muted-foreground">NED University of Engineering and Technology</p>
                    <p className="text-sm text-primary">CGPA: 3.8</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card className="h-full border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-6">
                <p className="text-lg">
                  As an ambitious final-year (8 semester) Computer Science student at NEDUET, I am actively seeking an internship in software engineering and web development. With a strong foundation in computer science and a passion for leveraging web technologies, I am eager to apply my skills in a dynamic and hands-on environment.
                </p>
                <p className="text-lg">
                  My journey in software development began with curiosity about how web applications work. This curiosity led me to explore various technologies and frameworks, eventually allowing me to build full-stack applications using the MERN and MEAN stacks.
                </p>
                <p className="text-lg">
                  I currently work as a Junior Software Developer at Octdaily, where I develop and maintain web applications using Angular for front-end and .NET for back-end. This experience has strengthened my problem-solving skills and ability to work in team environments.
                </p>
                <p className="text-lg">
                  My goal is to contribute to real-world projects, gain valuable industry experience, and further enhance my proficiency in software development. I'm particularly interested in creating solutions that solve meaningful problems and improve user experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;