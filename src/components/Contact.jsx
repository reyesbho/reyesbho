import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <motion.section 
      className="py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contacto</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid  gap-8">
            <motion.div 
              className="flex flex-row items-start justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              
              
              <div className="space-y-4">
              <h4 className="font-semibold text-gray-800 mb-4">Información de Contacto</h4>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Teléfono</h4>
                    <p className="text-gray-600">5638549785</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">reyesbho@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ubicación</h4>
                    <p className="text-gray-600">Santa Cruz Tacahua, Cp. 71180. Oaxaca, México</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Github className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">GitHub</h4>
                    <a 
                      href="https://github.com/reyesbho" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      github.com/reyesbho
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 mb-4">Certificaciones y Perfiles</h4>
                <div className="space-y-3">
                  <a 
                    href="https://www.salesforce.com/trailblazer/reyesbho" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <ExternalLink size={16} />
                    <span>Salesforce Trailblazer</span>
                  </a>
                  <a 
                    href="https://platzi.com/@patkings_reyes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <ExternalLink size={16} />
                    <span>Platzi Profile</span>
                  </a>
                </div>
              </div>
            </motion.div>
           
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 