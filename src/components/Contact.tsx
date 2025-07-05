
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import ContactCard from './ContactCard';
import ResumeSection from './ResumeSection';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
              <ContactCard
                key={contact.type}
                contact={contact}
                variants={cardVariants}
              />
            ))}
          </div>

          {/* Resume Section */}
          <ResumeSection variants={itemVariants} />
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
