import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactCard = ({ contact, variants }) => {
  return (
    <motion.div
      variants={variants}
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
  );
};

export default ContactCard;