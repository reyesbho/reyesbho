import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Reyes Oscar Bustamante Hernández
          </motion.h1>
          <motion.h2 
            className="text-2xl font-light mb-8 text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Desarrollador Full Stack
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Apasionado de la tecnología con 8 años de experiencia en desarrollo de software, 
            tanto en BackEnd como en FrontEnd. Líder de equipos de desarrollo impulsando 
            proyectos exitosos y soluciones innovadoras.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>5638549785</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>reyesbho@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Santa Cruz Tacahua, Oaxaca, México</span>
            </div>
            <div className="flex items-center gap-2">
              <Github size={16} />
              <a href="https://github.com/reyesbho" target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/reyesbho
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 