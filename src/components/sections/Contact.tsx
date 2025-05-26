import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import SectionHeading from '@/components/ui/section-heading';
import { fadeIn, slideUp } from '@/lib/animations';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: 'Thanks for reaching out. I\'ll get back to you soon.',
        variant: 'default',
      });
      
      setFormState({
        name: '',
        email: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading title="Contact" subtitle="Get In Touch" />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="mt-12 grid grid-cols-1 text-left lg:grid-cols-2 md:gap-8"
        >
          <motion.div variants={slideUp} custom={0}>
            <Card className="h-full border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="md:p-8 px-0 py-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  I'm currently seeking opportunities as a Software Engineer or Full Stack Developer. 
                  Whether you have a question, project idea, or just want to say hello, feel free to reach out!
                </p>
                
                <div className="space-y-6 mt-auto">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:zaryab.110786@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        zaryab.110786@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <a href="tel:+923333239035" className="text-muted-foreground hover:text-primary transition-colors">
                        +92 333 3239035
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={slideUp} custom={1}>
            <Card className="border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;