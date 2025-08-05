import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "TechCorp Solutions",
      image: "SJ", // Initials as placeholder
      rating: 5,
      text: "Working with this developer was an absolute pleasure. Their attention to detail and ability to deliver complex features on time exceeded our expectations. The code quality was exceptional and the final product surpassed our initial vision.",
      project: "E-commerce Platform"
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "StartupXYZ",
      image: "MC",
      rating: 5,
      text: "An outstanding developer who truly understands both the technical and business aspects of software development. They helped us scale our platform from 1k to 100k users while maintaining performance and reliability.",
      project: "SaaS Application"
    },
    {
      name: "Emily Rodriguez",
      position: "Design Director",
      company: "Creative Agency",
      image: "ER",
      rating: 5,
      text: "The collaboration was seamless. They perfectly translated our designs into functional, responsive web applications. Their understanding of modern UI/UX principles and ability to suggest improvements was invaluable.",
      project: "Portfolio Website"
    },
    {
      name: "David Thompson",
      position: "Founder",
      company: "Innovation Labs",
      image: "DT",
      rating: 5,
      text: "Exceptional problem-solving skills and technical expertise. They tackled our most challenging integration requirements and delivered solutions that were both elegant and performant. Highly recommended!",
      project: "API Integration"
    },
    {
      name: "Lisa Wang",
      position: "Marketing Director",
      company: "Digital Solutions",
      image: "LW",
      rating: 5,
      text: "The developer's ability to understand our business needs and translate them into technical solutions was remarkable. The project was delivered on time, within budget, and exceeded our performance expectations.",
      project: "Dashboard Application"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,107,107,0.2),transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-foreground">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
            What clients say about working with me and the impact of our collaborations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Main Testimonial Display */}
          <div className="relative mb-12">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Client Info */}
                    <div className="text-center md:text-left">
                      <div className="relative inline-block mb-4">
                        <div className="w-20 h-20 mx-auto md:mx-0 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          {testimonials[currentIndex].image}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground font-poppins mb-1">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-inter mb-1">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-sm font-medium text-primary font-inter">
                        {testimonials[currentIndex].company}
                      </p>
                      
                      {/* Rating */}
                      <div className="flex justify-center md:justify-start gap-1 mt-3">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="md:col-span-2 relative">
                      <Quote className="w-8 h-8 text-primary/30 mb-4" />
                      <blockquote className="text-lg text-foreground font-inter leading-relaxed mb-4">
                        "{testimonials[currentIndex].text}"
                      </blockquote>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                        <span className="text-sm font-medium text-primary font-inter">
                          Project: {testimonials[currentIndex].project}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-card/60 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/80 to-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground font-poppins text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-muted-foreground font-inter">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-sm text-muted-foreground font-inter leading-relaxed line-clamp-4">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm border border-border/50">
            <h3 className="text-2xl font-bold text-foreground font-poppins mb-4">
              Ready to join these satisfied clients?
            </h3>
            <p className="text-muted-foreground font-inter mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your project to life with the same level of excellence and dedication.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-3 rounded-lg font-semibold font-inter hover:shadow-lg transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;