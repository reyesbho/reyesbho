import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Server, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      icon: <Code className="text-blue-600" size={24} />,
      skills: ["Java", "JavaScript", "TypeScript", "Python (básico)", ".NET (básico)"]
    },
    {
      title: "Frontend",
      icon: <Smartphone className="text-green-600" size={24} />,
      skills: ["React", "Angular", "HTML5", "CSS", "Modern Frontend", "Web Development"]
    },
    {
      title: "Backend",
      icon: <Server className="text-purple-600" size={24} />,
      skills: ["Spring Boot", "Hibernate", "JPA", "JWT", "OAuth", "Node.js", "Express", "REST APIs"]
    },
    {
      title: "Arquitectura & DevOps",
      icon: <Cloud className="text-indigo-600" size={24} />,
      skills: ["Microservices", "Docker", "Git", "Jenkins", "OneOps", "Looper", "Artifactory", "Concord", "AWS", "CI/CD"]
    },
    {
      title: "Bases de Datos",
      icon: <Database className="text-orange-600" size={24} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "MSqlServer","Firebase"]
    },
    {
      title: "Herramientas & Tecnologías",
      icon: <GitBranch className="text-red-600" size={24} />,
      skills: ["Tomcat", "JBoss", "NgInx", "GitHub", "Maven", "Spring Security", "BPMN", "JasperSoft"]
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Habilidades Técnicas</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Habilidades técnicas desarrolladas a través de 8 años de experiencia en desarrollo de software, 
            incluyendo proyectos personales y profesionales con las últimas tecnologías.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats Section */}
        <motion.div 
          className="mt-12 bg-white rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Perfil de GitHub</h3>
            <p className="text-gray-600">Estadísticas y logros de mi actividad en GitHub</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-gray-600">Repositorios Públicos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2</div>
              <div className="text-gray-600">Logros Obtenidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">Lenguajes Principales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-gray-700 font-medium">Logros:</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Pull Shark x2</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Quickdraw</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills; 