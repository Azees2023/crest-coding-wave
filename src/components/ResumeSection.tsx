
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ScrollToTop from './ScrollToTop';

interface ResumeSectionProps {
  variants: any;
}

const ResumeSection = ({ variants }: ResumeSectionProps) => {
  return (
    <motion.div
      variants={variants}
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
            const link = document.createElement('a');
            link.href = '/resume.pdf';
            link.download = 'Your_Name_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download Resume
        </Button>

        <ScrollToTop />
      </div>
    </motion.div>
  );
};

export default ResumeSection;
