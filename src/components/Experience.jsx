import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      description: "Lead development of enterprise web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led team of 5 developers on critical product launches",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Full Stack Developer",
      company: "Innovation Labs",
      location: "New York, NY",
      duration: "2021 - 2022",
      type: "Full-time",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Increased client satisfaction score by 25%",
        "Introduced automated testing reducing bugs by 50%"
      ],
      technologies: ["Vue.js", "Python", "Django", "MySQL", "Redis", "Git"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      duration: "2020 - 2021",
      type: "Full-time",
      description: "Built responsive web applications from scratch. Worked closely with UX designers to implement interactive and accessible user interfaces.",
      achievements: [
        "Built company's main product from MVP to 10k users",
        "Improved mobile experience increasing retention by 30%",
        "Established frontend development best practices"
      ],
      technologies: ["React", "JavaScript", "Sass", "Webpack", "Jest", "Figma"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      duration: "2019 - 2020",
      type: "Contract",
      description: "Contributed to various client websites and web applications. Gained experience in multiple frameworks and learned industry best practices.",
      achievements: [
        "Successfully completed 20+ client projects",
        "Learned 5 new technologies in first 6 months",
        "Received outstanding performance review"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(120,119,198,0.1)_50%,transparent_75%)] bg-[length:60px_60px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-foreground">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
            A journey of growth, innovation, and impact across diverse technology landscapes
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 transform md:-translate-x-0.5 z-0" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.duration}`}
                variants={itemVariants}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-background shadow-lg`} />
                
                {/* Experience Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300 hover:border-primary/20">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold text-foreground font-poppins mb-1">
                              {exp.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-muted-foreground mb-2">
                              <Building className="w-4 h-4" />
                              <span className="font-inter font-medium">{exp.company}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="font-inter text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-inter">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="font-inter">{exp.location}</span>
                          </div>
                        </div>
                        
                        <div className={`w-16 h-1 bg-gradient-to-r ${exp.color} rounded-full mt-3`} />
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground font-inter leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Key Achievements */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-foreground font-poppins flex items-center gap-2">
                            <Award className="w-4 h-4 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground font-inter flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-foreground font-poppins">Technologies</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="secondary" 
                                className="text-xs font-inter px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm border border-border/50">
            <h3 className="text-2xl font-bold text-foreground font-poppins mb-4">
              Ready to discuss your next project?
            </h3>
            <p className="text-muted-foreground font-inter mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate with innovative teams.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-3 rounded-lg font-semibold font-inter hover:shadow-lg transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Let's Work Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;