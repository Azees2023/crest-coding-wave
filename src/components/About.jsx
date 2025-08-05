import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const stats = [
    { number: "2+", label: "Projects Completed", icon: Award },
    { number: "FullStack", label: "Fresher Developer", icon: Calendar },
    { number: "+", label: "Happy Clients", icon: MapPin },
    { number: "100%", label: "Success Rate", icon: Award }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Professional Photo */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20"
              >
                <div className="aspect-[4/5] flex items-center justify-center p-8">
                  {/* Professional Photo Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-800/30 dark:to-blue-800/30 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-full  mx-auto mb-4 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                        <img
                          src="/public/image-1.jpg"
                          alt="Profile"
                          className="w-full h-full  object-cover"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Professional Photo</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 w-12 h-12 bg-purple-400/20 rounded-full backdrop-blur-sm"
                />
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-4 left-4 w-8 h-8 bg-blue-400/20 rounded-full backdrop-blur-sm"
                />
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full -z-10" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-foreground"
              >
                About Me
              </motion.h2>
              <motion.div variants={itemVariants} className="space-y-4 text-lg text-muted-foreground font-inter leading-relaxed">
                <p>
                  I'm a fresher full-stack developer specializing in Java technologies, eager to start my professional journey and contribute to impactful digital solutions. My passion for technology drives me to continuously learn and grow in the ever-evolving world of software development.
                </p>
                <p>
                  With a strong foundation in Java, Spring Boot, and modern web technologies, I am committed to building robust and scalable applications. I enjoy solving problems through code and am enthusiastic about collaborating with teams to deliver high-quality software.
                </p>
                <p>
                  When I'm not coding, I focus on expanding my skills, exploring new frameworks, and staying updated with industry trends to become a better developer every day.
                </p>
              </motion.div>
            </div>

            {/* Skills & Expertise */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold font-poppins text-foreground">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React.js', 'Node.js', 'JavaScript', 'Core Java', 'SpringBoot', 'PostgreSQL' ,
                  'MySql', 'Kubernetes', 'Web Technology', 'Agile'
                ].map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm font-inter hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold px-6 py-3 font-inter"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Connect
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-semibold px-6 py-3 font-inter"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Developer-Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-3">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground font-poppins mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-inter">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;