import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone } from 'lucide-react';

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
      skills: ["React", "Angular", "HTML5", "CSS"]
    },
    {
      title: "Backend",
      icon: <Database className="text-purple-600" size={24} />,
      skills: ["Spring Boot", "Hibernate", "JPA", "JWT", "OAuth"]
    },
    {
      title: "Bases de Datos",
      icon: <Database className="text-orange-600" size={24} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "MSqlServer"]
    },
    {
      title: "Herramientas y Tecnologías",
      icon: <Cloud className="text-indigo-600" size={24} />,
      skills: ["Docker", "Git", "Jenkins", "OneOps", "Looper", "Artifactory", "Concord", "AWS", "Tomcat", "JBoss", "NgInx"]
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
      </div>
    </motion.section>
  );
};

export default Skills; 