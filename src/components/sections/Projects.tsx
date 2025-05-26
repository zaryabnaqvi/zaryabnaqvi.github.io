import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github as GitHub, School, Building, BookUser, Pen } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';
import { fadeIn, staggerContainer } from '@/lib/animations';
import cowasjeeImage from '@/assets/cowasjee.png'; // Placeholder for the project image
import estateImage from '@/assets/fairmans.png'; // Placeholder for the project image
import examitiImage from '@/assets/examiti.png'; // Placeholder for the project image
import cheatproofImage from '@/assets/cheatproof.png'; // Placeholder for the project image
import azaEHussainImage from '@/assets/aza-e-hussain.png'; // Placeholder for the project image
import davidStitch from '@/assets/david-stitch.png'; // Placeholder for the project image
import foodiaHalifaxImage from '@/assets/foodia-halifax.png'; // Placeholder for the project image

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'professional' | 'personal';
  image: string;
  technologies: string[];
  links: {
    live?: string;
    code?: string;
  };
  features: string[];
  icon: typeof School | typeof Building | typeof BookUser;
}

const projects: Project[] = [
  {
    id: 'ned-cowasjee',
    title: 'NED Cowasjee School Website',
    description: 'A full-stack web application for NED Cowasjee School featuring responsive design and real-time updates.',
    category: 'professional',
    image: cowasjeeImage,
    technologies: ['React', 'Tailwind CSS', 'Express', 'Vercel'],
    links: {
      live: 'https://www.cowasjeeschool.edu.pk/',
      code: 'https://github.com/zaryabnaqvi/ned-cowasjee-school'
    },
    features: [
      'Responsive design using Tailwind CSS',
      'Back-end integration with Express',
      'Real-time data updates',
      'Deployed on Vercel for seamless scaling'
    ],
    icon: School
  },
  {
    id: 'fairman-estate',
    title: 'Fairman\'s Estate Agency Website',
    description: 'A responsive real estate website showcasing property listings and agency services with a modern UI.',
    category: 'professional',
    image: estateImage,
    technologies: ['React', 'Tailwind CSS', 'Express.js', 'Vercel'],
    links: {
      live: 'https://fairmansestateagents.co.uk/',
      // code: 'https://github.com/zaryabnaqvi/fairman-estate'
    },
    features: [
      'User-friendly property search functionality',
      'Interactive property listings with detailed information',
      'Responsive design for all devices',
      'Backend services for property management'
    ],
    icon: Building
  },
  {
    id: 'examiti',
    title: 'Examiti - Examination Automation System',
    description: 'A comprehensive system for automating exam creation, quality control, and assessment processes with OBE requirements.',
    category: 'professional',
    image: examitiImage,
    technologies: ['React', 'Express.js', 'MongoDB', 'llbama 2'],
    links: {
      live: 'https://examiti.netlify.app/',
    
    },
    features: [
      'Examination editor with question bank',
      'Teacher and course management modules',
      'Outcome-Based Education (OBE) integration',
      'Question categorization by difficulty and topic'
    ],
    icon: BookUser
  },
  {
    id: 'cheatproof',
    title: 'Cheatproof - AI-Powered Exam Monitoring',
    description: 'A real-time AI-powered exam monitoring system with browser lockdown and facial recognition.',
    category: 'personal',
    image: cheatproofImage,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TensorFlow.js'],
    links: {
      live: 'https://cheatproof.online',
    },
    features: [
      'Real-time AI-powered cheating detection system',
      'Browser lockdown functionality to prevent unauthorized access',
      'Facial recognition and continuous identity verification',
      'Comprehensive analytics dashboard for educators'
    ],
    icon: School
  },
  {
    id: 'aza-e-hussain',
    title: 'Aza-e-Hussain Trust | Halifax',
    description: 'A responsive website for Aza-e-Hussain, featuring event schedules and community engagement.',
    category: 'personal',
    image: azaEHussainImage,
    technologies: ['React', 'Tailwind CSS', 'Express.js', 'Vercel'],
    links: {
      live: 'https://aza-e-hussain.com/',
    },
    features: [
      'Event schedule and details',
      'Community engagement features',
      'Responsive design for all devices'
    ],
    icon: School
  },
  {
    id: 'david-stitch',
    title: 'David Stitch - Embroidery Artist Portfolio',
    description: 'A professional portfolio website showcasing embroidery projects and skills.',
    category: 'professional',
    image: davidStitch,
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    links: {
      live: 'https://davidstitch.com/',
    },
    features: [
      'Showcase of personal projects and skills',
      'Modern and responsive design',
      'Smooth animations using Framer Motion',
      'Email contact form for inquiries'
    ],
    icon: Pen
  },{
    id: 'foodia-halifax',
    title: 'Foodia Halifax - Restaurant',
    description: 'A restaurant website for Halifax, featuring menu and delicious cuisines.',
    category: 'professional',
    image: foodiaHalifaxImage,
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express'],
    links: {
      live: 'https://foodiahalifax.com/',
    },
    features: [
      'Search and filter restaurants by cuisine and location',
      'User reviews and ratings for each restaurant',
      'Responsive design for mobile and desktop'
    ],
    icon: Building
  }
];

interface ProjectGridProps {
  projects: Project[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'professional' | 'personal'>('all');
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

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 md:px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading title="Projects" subtitle="My Recent Work" />
        
        <motion.div
          ref={ref}
          initial="visible"
          animate={controls}
          variants={fadeIn}
          className="mt-8 mb-12 text-left"
        >
          <Tabs defaultValue="all" value={activeTab} onValueChange={(value) => setActiveTab(value as 'all' | 'professional' | 'personal')}>
            <div className="flex justify-center">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="personal">Personal</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
            <TabsContent value="professional" className="mt-0">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
            <TabsContent value="personal" className="mt-0">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
          </Tabs>
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/zaryabnaqvi" target="_blank" rel="noopener noreferrer">
              <GitHub className="mr-2 h-5 w-5" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <motion.div
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </motion.div>
  );
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const IconComponent = project.icon;
  
  return (
    <motion.div
      variants={fadeIn}
      custom={index}
      className="flex flex-col h-full"
    >
      <Card className="overflow-hidden border-none bg-card/50 backdrop-blur-sm h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden bg-muted/30">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <CardContent className="flex flex-col flex-grow p-0 py-6 md:p-6">
          <div className="flex items-start mb-4">
            <IconComponent className="h-5 w-5 mt-1 mr-2 text-muted-foreground" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary">{tech}</Badge>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-3 mt-auto">
            {project.links.live && (
              <Button variant="secondary" size="sm" asChild>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  View Site <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </Button>
            )}
            {project.links.code && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                  <GitHub className="mr-1 h-3 w-3" /> Code
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Projects;