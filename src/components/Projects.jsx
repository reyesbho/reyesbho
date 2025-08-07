import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Portal para Firma de Documentos",
      description: "Sistema completo de firma digital con autenticación JWT, manejo de llaves RSA y coordinación de firmantes. Incluye backend con Spring Boot y frontend con Angular 11.",
      technologies: ["Spring Boot", "Java 11", "Angular 11", "JWT", "RSA", "JBoss", "Apache", "SSL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://github.com/reyesbho/document-signing-platform",
      live: "#",
      featured: false
    },
    {
      title: "Servicios de Verificación de Información",
      description: "API REST para validación de información con autenticación básica, integración de servicios de terceros y reportes ejecutivos con JasperSoft.",
      technologies: ["Spring Boot", "Java 11", "PostgreSQL", "JasperSoft", "REST APIs", "Spring Security"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "https://github.com/reyesbho/verification-services",
      live: "#",
      featured: false
    },
    {
      title: "Sistema de Gestión de Campañas Publicitarias",
      description: "Módulo optimizado para consulta de campañas publicitarias con integración de PowerBI y externalización de plataforma con colaboración de soporte USA.",
      technologies: ["Spring Boot", "Java 11", "Angular 11", "PowerBI", "OAuth2", "F5 Load Balancer", "MSqlServer"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      github: "https://github.com/reyesbho/advertising-campaigns",
      live: "#",
      featured: false
    },
    {
      title: "Portal de Indicadores Ejecutivos",
      description: "Dashboard ejecutivo con autenticación JWT, gráficas interactivas con Chart.js y reportes personalizados con JasperSoft.",
      technologies: ["Angular 7", "Spring Boot", "Java 8", "Chart.js", "JasperSoft", "JWT", "REST APIs"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "https://github.com/reyesbho/executive-dashboard",
      live: "#",
      featured: false
    },
    {
      title: "Sistema de Procesamiento de Transacciones",
      description: "Procesamiento y validación de transacciones en batch con Java 7, módulo de recepción con Spring Boot y autenticación PKI.",
      technologies: ["Java 7", "Spring Boot", "Java 8", "PKI", "Batch Processing", "REST APIs"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://github.com/reyesbho/transaction-processor",
      live: "#",
      featured: false
    },
    {
      title: "Flujos BPMN con Activity",
      description: "Creación y programación de flujos de trabajo BPMN para automatización de procesos empresariales con reportes ejecutivos.",
      technologies: ["Activity BPMN", "Spring", "Hibernate", "JPA", "JWT", "JasperSoft", "SqlServer", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "https://github.com/reyesbho/bpmn-workflows",
      live: "#",
      featured: false
    }
  ];

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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Proyectos Destacados</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                project.featured ? 'ring-2 ring-blue-500' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    Destacado
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Código</span>
                  </a>
                  {project.live !== "#" && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Globe size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects; 