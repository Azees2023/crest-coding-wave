import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"
      >
        <FileText className="w-8 h-8 text-white" />
      </motion.div>
      
      <h3 className="text-2xl font-bold mb-4 font-poppins">
        Download My Resume
      </h3>
      <p className="text-gray-300 mb-6 font-inter max-w-md mx-auto">
        Get a comprehensive overview of my experience, skills, and achievements in a downloadable format.
      </p>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-inter font-semibold px-8 py-3 text-lg mb-6"
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/public/Azees_Resume.pdf';
            link.download = 'Azees_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download Resume
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ResumeSection;