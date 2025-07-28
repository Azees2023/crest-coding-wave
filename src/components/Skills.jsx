import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skills = [
    { name: 'React', level: 95, gradient: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 90, gradient: 'from-green-400 to-green-600' },
    { name: 'TypeScript', level: 85, gradient: 'from-blue-500 to-blue-700' },
    { name: 'Python', level: 88, gradient: 'from-yellow-400 to-yellow-600' },
    { name: 'MongoDB', level: 82, gradient: 'from-green-500 to-green-700' },
    { name: 'AWS', level: 78, gradient: 'from-orange-400 to-orange-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Crafting digital experiences with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills Progress Bars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-8 font-poppins">
              Programming & Frameworks
            </h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium font-inter">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="relative">
                  <Progress 
                    value={isInView ? skill.level : 0} 
                    className="h-3 bg-gray-700"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.gradient}`}
                    style={{ width: isInView ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Competencies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-8 font-poppins">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                'Full-Stack Development',
                'API Design',
                'Database Design',
                'Cloud Architecture',
                'DevOps',
                'UI/UX Design',
                'Mobile Development',
                'Performance Optimization',
              ].map((competency, index) => (
                <motion.div
                  key={competency}
                  variants={categoryVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300 hover:border-purple-400/50"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    />
                    <span className="text-sm font-medium font-inter">{competency}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;