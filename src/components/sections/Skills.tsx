import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionHeading from '@/components/ui/section-heading';
import { fadeIn } from '@/lib/animations';
import { 
  Code, Database, Layout, Server,
  Brackets, FileCode, Layers, Terminal,
} from 'lucide-react';

// ... (keep your skillCategories array the same)


const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Angular', level: 80 },
      { name: 'Redux', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 75 }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'NestJS', level: 75 },
      { name: '.NET', level: 70 },
      { name: 'REST APIs', level: 85 },
      { name: 'GraphQL', level: 65 },
      { name: 'Flask', level: 70 },
      { name: 'Authentication', level: 75 }
    ]
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Firebase', level: 70 },
      { name: 'Redis', level: 60 }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Other',
    icon: Terminal,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'CI/CD', level: 70 },
      { name: 'Azure DevOps', level: 75 },
      { name: 'Agile/Scrum', level: 80 },
      { name: 'Testing', level: 75 },
      { name: 'Vercel/Netlify', level: 85 }
    ]
  }
];

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [activeTab, setActiveTab] = useState('frontend');
  const [progressAnimated, setProgressAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      // Animate progress bars after a short delay
      setTimeout(() => setProgressAnimated(true), 300);
    }
  }, [controls, inView]);

  return (
    <section id="skills" className="py-20 md:px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading title="Skills" subtitle="My Technical Expertise" />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="mt-12"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList>
                {skillCategories.map((category:any) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id} 
                    className="flex items-center md:gap-2"
                  >
                    <category.icon className="h-4 w-4" />
                    <span>{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillCategories.map((category:any) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <Card className="border-none bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-0 py-6 md:p-6">
                    <div
                      
                      className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 gap-y-8"
                    >
                      {category.skills.map((skill:any) => (
                        <div 
                          key={skill.name} 
                           
                          
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress 
                            value={progressAnimated && activeTab === category.id ? skill.level : 0} 
                            className="h-2 transition-all duration-1000 ease-out"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
        
        {/* Keep the Technology Stacks section the same */}

                <motion.div
          variants={fadeIn}
          custom={2}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8">Technology Stacks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Brackets className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">MERN Stack</h4>
                <p className="text-sm text-muted-foreground">MongoDB, Express, React, Node.js</p>
              </CardContent>
            </Card>
            
            <Card className="border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">MEAN Stack</h4>
                <p className="text-sm text-muted-foreground">MongoDB, Express, Angular, Node.js</p>
              </CardContent>
            </Card>
            
            <Card className="border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileCode className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Next.js</h4>
                <p className="text-sm text-muted-foreground">Full-stack React framework</p>
              </CardContent>
            </Card>
            
            <Card className="border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">.NET</h4>
                <p className="text-sm text-muted-foreground">Entity Framework, C#, SQL Server</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;