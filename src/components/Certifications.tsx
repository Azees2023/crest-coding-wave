
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'FreeCodeCamp',
      date: '2024',
      description: 'Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, and database management.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: '2023',
      description: 'Advanced JavaScript concepts, algorithms, and data structures implementation.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: '2023',
      description: 'In-depth React development including hooks, context, Redux, and modern React patterns.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'Cloud computing fundamentals and AWS services knowledge certification.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
            Professional certifications and completed courses that validate my skills
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>

          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-center justify-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    className="relative"
                  >
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 overflow-hidden">
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}></div>
                      
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl font-poppins font-bold text-gray-800 leading-tight">
                            {cert.title}
                          </CardTitle>
                          <span className="text-sm font-inter font-medium text-gray-500 whitespace-nowrap ml-4">
                            {cert.date}
                          </span>
                        </div>
                        <p className="text-purple-600 font-inter font-semibold text-sm">
                          {cert.issuer}
                        </p>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-gray-600 font-inter leading-relaxed">
                          {cert.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
