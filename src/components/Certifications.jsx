import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Professional-level certification demonstrating expertise in designing distributed systems on AWS.",
      color: "from-orange-400 to-yellow-500"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      description: "Advanced certification for building scalable and reliable applications on Google Cloud Platform.",
      color: "from-blue-400 to-green-500"
    },
    {
      title: "Microsoft Azure Developer Associate",
      issuer: "Microsoft",
      date: "2022",
      description: "Certification validating skills in developing cloud solutions using Azure services.",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "2022",
      description: "Professional certification demonstrating proficiency in MongoDB database development.",
      color: "from-green-500 to-teal-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="certifications" ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-r ${cert.color} transform -translate-x-1.5 md:-translate-x-1.5 z-10`} />
                
                {/* Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardHeader>
                        <div className={`w-12 h-1 bg-gradient-to-r ${cert.color} rounded-full mb-3`} />
                        <CardTitle className="text-xl font-poppins font-bold text-white">
                          {cert.title}
                        </CardTitle>
                        <div className="flex justify-between items-center text-sm text-gray-400">
                          <span className="font-inter">{cert.issuer}</span>
                          <span className="font-inter">{cert.date}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 font-inter leading-relaxed">
                          {cert.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;