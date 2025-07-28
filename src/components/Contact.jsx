import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import ContactCard from './ContactCard';
import ResumeSection from './ResumeSection';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const contactInfo = [
    {
      type: 'Email',
      value: 'hello@developer.com',
      action: () => window.open('mailto:hello@developer.com'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'LinkedIn',
      value: '/in/developer',
      action: () => window.open('https://linkedin.com/in/developer'),
      color: 'from-blue-600 to-blue-700'
    },
    {
      type: 'GitHub',
      value: '@developer',
      action: () => window.open('https://github.com/developer'),
      color: 'from-gray-700 to-gray-800'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const buttonVariants = {
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
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((contact) => (
            <ContactCard
              key={contact.type}
              contact={contact}
              variants={cardVariants}
            />
          ))}
        </motion.div>

        <ResumeSection />

        {/* Mobile Call Button */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center mt-12 md:hidden"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 font-semibold px-8 py-4 text-lg font-inter"
            onClick={() => window.open('tel:+1234567890', '_self')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;