
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = [
    {
      type: 'Email',
      value: 'developer@example.com',
      action: () => window.open('mailto:developer@example.com'),
      color: 'from-red-500 to-pink-500'
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/developer',
      action: () => window.open('https://linkedin.com/in/developer', '_blank'),
      color: 'from-blue-500 to-blue-700'
    },
    {
      type: 'GitHub',
      value: 'github.com/developer',
      action: () => window.open('https://github.com/developer', '_blank'),
      color: 'from-gray-700 to-gray-900'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 font-inter max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.type}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 text-white h-full cursor-pointer hover:bg-white/10 transition-all duration-300">
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-lg font-poppins font-bold">
                      {contact.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 font-inter mb-4 text-sm">
                      {contact.value}
                    </p>
                    <Button
                      onClick={contact.action}
                      className={`bg-gradient-to-r ${contact.color} hover:scale-105 transition-transform duration-300 w-full`}
                    >
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Resume Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-poppins font-bold text-white mb-4">
                Download My Resume
              </h3>
              <p className="text-gray-300 font-inter mb-6">
                Get a detailed overview of my experience, skills, and achievements
              </p>
              
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-inter font-semibold px-8 py-3 text-lg mb-6"
                onClick={() => {
                  // Replace with actual resume download link
                  console.log('Downloading resume...');
                }}
              >
                Download Resume
              </Button>

              {/* Scroll to Top */}
              <div className="flex flex-col items-center">
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/70 hover:text-white transition-colors mb-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUp className="w-6 h-6" />
                </motion.button>
                <span className="text-white/70 text-sm font-inter">
                  Back to Top
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call Button (Mobile) */}
        <motion.div
          variants={buttonVariants}
          className="md:hidden text-center mt-8"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 font-inter font-semibold px-8 py-3 text-lg"
            onClick={() => window.open('tel:+15551234567')}
          >
            Call Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
