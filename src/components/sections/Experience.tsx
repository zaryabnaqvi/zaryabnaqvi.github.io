import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code, Calendar } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';
import { fadeIn, staggerContainer, slideUp } from '@/lib/animations';

const experience = [
  {
    title: 'Junior Software Developer',
    company: 'Octdaily',
    period: 'April 2024 - Present',
    description: 'Developing and maintaining web applications using Angular for front-end and .NET for back-end.',
    responsibilities: [
      'Collaborating with cross-functional teams to define, design, and ship new features',
      'Creating reusable components and services in Angular to enhance code modularity and maintainability',
      'Implementing RESTful APIs and integrating front-end with .NET back-end services',
      'Debugging and resolving software defects and performance bottlenecks',
      'Writing unit tests for Angular components and .NET services to ensure code quality',
      'Following Agile development methodologies, including sprint planning, daily stand-ups, and code reviews',
      'Managing version control using Azure DevOps for seamless collaboration and continuous integration'
    ],
    skills: ['Angular', '.NET', 'RESTful APIs', 'Agile', 'Azure DevOps', 'Unit Testing']
  }
];

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading title="Experience" subtitle="My Professional Journey" />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="mt-12 space-y-8"
        >
          {experience.map((job, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="overflow-hidden border-none bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="md:col-span-2 p-6 border-r border-border/50 bg-card/30">
                      <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                      </div>
                      <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Code className="h-4 w-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                      <p className="mb-6 text-foreground/80">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-3 p-6">
                      <h4 className="text-lg font-medium mb-4">Key Responsibilities</h4>
                      <ul className="space-y-3">
                        {job.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            variants={slideUp}
                            custom={i}
                            className="flex items-start gap-3"
                          >
                            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                              <span className="h-2 w-2 rounded-full bg-primary"></span>
                            </span>
                            <span className="text-foreground/80">{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;