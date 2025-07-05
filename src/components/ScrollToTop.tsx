
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
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
  );
};

export default ScrollToTop;
