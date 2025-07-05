
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 75, color: 'from-blue-500 to-indigo-600' },
    { name: 'MongoDB', level: 70, color: 'from-green-500 to-teal-600' },
    { name: 'TypeScript', level: 85, color: 'from-blue-600 to-purple-600' },
    { name: 'CSS/Tailwind', level: 88, color: 'from-pink-400 to-purple-500' },
    { name: 'Git', level: 82, color: 'from-gray-600 to-gray-800' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-poppins font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 font-inter max-w-2xl mx-auto"
          >
            Here are the technologies I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillItemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-inter font-semibold text-gray-800">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-gray-600">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Circular Skills */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.h3
            variants={categoryVariants}
            className="text-2xl font-poppins font-bold text-gray-800 mb-8"
          >
            Core Competencies
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {['Frontend', 'Backend', 'Database', 'DevOps'].map((category, index) => (
              <motion.div
                key={category}
                variants={categoryVariants}
                className="relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-inter font-bold text-sm shadow-lg"
                >
                  {category}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
