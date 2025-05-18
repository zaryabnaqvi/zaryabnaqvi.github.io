import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github as GitHub, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';
import { fadeIn, slideUp } from '@/lib/animations';
import fypdImage from '@/assets/cheatproof.png'; // Placeholder for the project image

const FeaturedProject = () => {
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
    <section id="featured" className="py-20 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading 
          title="Featured Project" 
          subtitle="Cheatproof.online - Final Year Design Project" 
          align="center"
        />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="mt-12"
        >
          <Card className="overflow-hidden border-none bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12 flex flex-col">
                  <motion.div variants={slideUp} custom={0}>
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="h-8 w-8 text-primary" />
                      <h3 className="text-3xl font-bold">CheatProof</h3>
                    </div>
                  </motion.div>
                  
                  <motion.p 
                    variants={slideUp} 
                    custom={1}
                    className="text-lg text-foreground/80 mb-6"
                  >
                    CheatProof is an innovative online exam proctoring system designed to ensure academic integrity in remote testing environments. The platform uses advanced AI to detect and prevent cheating while providing a seamless experience for both students and educators.
                  </motion.p>
                  
                  <motion.div 
                    variants={slideUp} 
                    custom={2}
                    className="space-y-4 mb-8"
                  >
                    <h4 className="text-xl font-medium">Key Features:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                          <span className="h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        <span>Real-time AI-powered cheating detection system</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                          <span className="h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        <span>Browser lockdown functionality to prevent unauthorized access</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                          <span className="h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        <span>Facial recognition and continuous identity verification</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                          <span className="h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        <span>Comprehensive analytics dashboard for educators</span>
                      </li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    variants={slideUp} 
                    custom={3}
                    className="flex flex-wrap gap-2 mb-8"
                  >
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Express</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>TensorFlow.js</Badge>
                    <Badge>WebRTC</Badge>
                  </motion.div>
                  
                  <motion.div 
                    variants={slideUp} 
                    custom={4}
                    className="flex flex-wrap gap-4 mt-auto"
                  >
                    <Button asChild>
                      <a href="https://cheatproof.online" target="_blank" rel="noopener noreferrer">
                        Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="secondary" asChild>
                      <a href="https://github.com/zaryabnaqvi/cheatproof" target="_blank" rel="noopener noreferrer">
                        <GitHub className="mr-2 h-4 w-4" /> View Code
                      </a>
                    </Button>
                  </motion.div>
                </div>
                
                <div className="relative lg:h-auto">
                  <div className="h-full min-h-[400px] bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center overflow-hidden">
                    <div className="relative w-[90%] max-w-[500px] aspect-video rounded-lg overflow-hidden shadow-xl">
                      {/* Placeholder for featured project image */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm flex items-center justify-center">
                        <img
                          src={fypdImage}
                          alt="Featured Project"
                          className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;