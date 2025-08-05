import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (window.innerWidth < 768) {
      // On mobile, show call dialog
      return;
    } else {
      // On desktop, scroll to home
      scrollToSection('#home');
    }
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-lg border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold cursor-pointer font-poppins md:cursor-default flex items-center gap-2"
                onClick={handleLogoClick}
              >
                {/* Animated small circular image/avatar */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0"
                >
                  <img
                    src="/public/Photo.jpg"
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-primary object-cover"
                  />
                </motion.div>
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Azees Rahaman
                </span>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="text-center">
                <Phone className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Let's Talk!</h3>
                <p className="text-muted-foreground mb-4">
                  Ready to discuss your project?
                </p>
                <Button
                  onClick={() => window.open('tel:+1234567890', '_self')}
                  className="w-full"
                >
                  Call Now: +1 (234) 567-890
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                className="text-foreground/80 hover:text-foreground transition-colors font-inter font-medium"
              >
                {item.label}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg rounded-lg mb-4 border border-border/50"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ x: 10 }}
                  className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors font-inter font-medium py-2"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;