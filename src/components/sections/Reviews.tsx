import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';
import { fadeIn, staggerContainer } from '@/lib/animations';
import nadeemMazhar from '@/assets/Nadeem Mazhar.jpg'; // Placeholder for the project image
import owaisAnsari from '@/assets/owais.jpg'; // Placeholder for the project image
import mujawwad from '@/assets/jawwad.jpg'; // Placeholder for the project image


const reviews = [
  {
    id: 1,
    name: "Muhammad Jawwad",
    role: "Software Engineer at Octdaily",
    image: mujawwad,
    rating: 5,
    review: "Working with Zaryab was an absolute pleasure. His technical expertise and attention to detail resulted in a flawless web application that exceeded our expectations.",
  },
  {
    id: 2,
    name: "Owais Ansari",
    role: "Software Engineer at OctDaily",
    image: owaisAnsari,
    rating: 5,
    review: "Zaryab's ability to understand complex requirements and translate them into elegant solutions is remarkable. He delivered our project ahead of schedule and with exceptional quality.",
  },
  {
    id: 3,
    name: "Nadeem Mazhar",
    role: "CEO at Fairman's Real Estate",
    image: nadeemMazhar,
    rating: 5,
    review: "The level of professionalism and technical skill Zaryab brings to the table is outstanding. He's not just a developer, but a true problem solver who thinks about the bigger picture.",
  }
];

const Reviews = () => {
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
    <section id="reviews" className="py-20 md:px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading 
          title="Client Reviews" 
          subtitle="What People Say"
          align="left"
        />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 text-left md:grid-cols-2 lg:grid-cols-3 md:gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={fadeIn}
              custom={index}
              className="h-full"
            >
              <Card className="h-full border-none bg-card/50 backdrop-blur-sm">
                <CardContent className="md:p-6 py-6 px-0 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star 
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  
                  <div className="relative flex-grow">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                    <p className="text-foreground/80 italic relative z-10 pt-4">
                      {review.review}
                    </p>
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

export default Reviews;