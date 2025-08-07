import { motion } from 'framer-motion';
import { User, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <motion.section 
      className="py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quién Soy</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <User className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Perfil Profesional</h3>
                  <p className="text-gray-600 leading-relaxed">
                  ¡Hola!, Soy un apasionado desarrollador Full Stack con experiencia en la creación de soluciones tecnológicas. Con un enfoque integral en el desarrollo del lado del cliente y del servidor, estoy comprometido con la entrega de productos de alta calidad que satisfacen las necesidades del usuario y superan las expectativas.
                  Me entusiasma la tecnología y siempre estoy buscando maneras de mejorar mis habilidades y conocimientos
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Target className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Objetivo</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mi objetivo es continuar aprendiendo y perfeccionando mis habilidades para ser un mejor 
                    profesional y contribuir de manera significativa al avance tecnológico.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Award className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Educación</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">Diplomado - Gestión Profesional Ágil de Proyectos</h4>
                      <p className="text-gray-600">Tecnológico de Monterrey Online (2020 - 2021)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Licenciatura en Ingeniería en Sistemas Computacionales</h4>
                      <p className="text-gray-600">Instituto Tecnológico de Tlaxiaco (2011 - 2016)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Idiomas</h4>
                      <p className="text-gray-600">Español: Nativo | Inglés: Intermedio</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 