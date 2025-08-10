import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitBranch } from 'lucide-react';

const PersonalProjects = () => {
  const projects = [
    {
      title: "microservice-practice",
      description: "Práctica de arquitectura de microservicios con Java. Proyecto que demuestra la implementación de microservicios escalables y bien estructurados.",
      technologies: ["Java", "Microservices", "Spring Boot"],
      github: "https://github.com/reyesbho/microservice-practice",
      language: "Java",
      stars: 0,
      forks: 0,
      featured: false
    },
    {
      title: "sweet-moments",
      description: "Aplicación moderna desarrollada con TypeScript. Proyecto que muestra habilidades en desarrollo frontend con tecnologías modernas.",
      technologies: ["TypeScript", "Modern Frontend", "React/Vue"],
      github: "https://github.com/reyesbho/sweet-moments",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      featured: false
    },
    {
      title: "moments",
      description: "Aplicación backend desarrollada en Java. Proyecto que demuestra habilidades en desarrollo backend robusto y escalable.",
      technologies: ["Java", "Backend", "Spring Boot", "REST APIs"],
      github: "https://github.com/reyesbho/moments",
      language: "Java",
      stars: 0,
      forks: 0,
      featured: false
    },
    {
      title: "sm-node",
      description: "Proyecto backend desarrollado con Node.js. Demuestra habilidades en desarrollo backend con JavaScript/Node.js.",
      technologies: ["Node.js", "JavaScript", "Backend", "Express"],
      github: "https://github.com/reyesbho/sm-node",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      featured: false
    },
    {
      title: "mcp-moments",
      description: "Proyecto JavaScript que complementa la funcionalidad de momentos. Demuestra habilidades en desarrollo frontend y backend.",
      technologies: ["JavaScript", "Frontend", "Backend"],
      github: "https://github.com/reyesbho/mcp-moments",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      featured: false
    },
    {
      title: "mbswmoments",
      description: "Proyecto complementario de la aplicación de momentos. Demuestra habilidades en desarrollo de aplicaciones web completas.",
      technologies: ["JavaScript", "Web Development", "Frontend", "Backend"],
      github: "https://github.com/reyesbho/mbswmoments",
      language: "JavaScript",
      stars: 0,
      forks: 0,
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Proyectos Personales</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Proyectos de código abierto y personales que demuestran mis habilidades técnicas 
            y pasión por el desarrollo de software. Todos los proyectos están disponibles en GitHub.
          </p>
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
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  {project.featured && (
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Destacado
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full ${
                        project.language === 'Java' ? 'bg-orange-500' :
                        project.language === 'TypeScript' ? 'bg-blue-500' :
                        'bg-yellow-500'
                      }`}></div>
                      <span>{project.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranch size={14} />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Ver en GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a 
            href="https://github.com/reyesbho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Github size={20} />
            <span>Ver todos mis proyectos en GitHub</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PersonalProjects;
