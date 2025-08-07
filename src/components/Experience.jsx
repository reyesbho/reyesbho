import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador Full Stack Java - Angular",
      company: "Sofftek",
      period: "Marzo 2022 - Actual",
      location: "Home Office",
      description: [
        "Uso de metodología Scrum, tablero Kanban y Jira para control en el desarrollo del proyecto",
        "Diseño y creación de Base de datos en MSqlserver",
        "Optimización de Scripts de base de datos y consultas SQL",
        "Creación de vistas (normales y materializadas), funciones, triggers y store procedures",
        "Análisis y creación de servicios REST con Spring Java 11, Hibernate y JPA",
        "Manejo de autenticación de JWT y OAuth",
        "Análisis de HUs y propuesta de soluciones",
        "Desarrollo de interfaces con Angular 11 (Javascript, CSS, HTML)",
        "Manejo de GitHub para manejo de versión de código",
        "Mantenimiento y configuración de CI/CD con Looper, Concord, OneOps, Artifactory"
      ],
      achievements: [
        "Optimización del tiempo de respuesta de módulo de consulta de campañas publicitarias en un 40%",
        "Integración de reportes PowerBi al aplicativo",
        "Externalización de plataforma con colaboración de soporte USA",
        "Mantenimiento de la plataforma y del flujo de CI/CD",
        "Recuperación y aplicación de ingeniería inversa de proyecto en .NET"
      ],
      technologies: ["OneOps", "Looper", "GitHub", "VsCode", "Intellij", "DbBeaver", "Postman", "Sourcetree", "Maven", "Spring Boot", "Java 11", "Java 8", "Javascript", "Python", ".Net", "CSS", "HTML", "Jira", "MSqlServer"]
    },
    {
      title: "Desarrollador Full Stack",
      company: "FIMPE Fideicomiso",
      period: "Enero 2018 - Enero 2022",
      location: "Home Office - 2 años",
      description: [
        "Revisión y optimización de código (JavaScript, Java 11, 8 y 7)",
        "Proyectos trabajados en lenguajes y tecnologías como Java 11, 8 y 7, Angular 7, 9, 11, Android, Spring",
        "Uso de contenedor de aplicaciones como Jboss",
        "Configuración de ambientes de trabajo con Docker y Dockercompose",
        "Configuración de certificados de dominio SSL",
        "Otras tecnologías utilizadas: Linux, Maven, Hibernate, JasperSoft, JPA, JWT, OpenSSL"
      ],
      projects: [
        {
          name: "Portal para firma de documentos",
          details: [
            "Creación de maquetas de diseño inicial con Balsamiq Wireframes",
            "Creación de modulo backend con Spring boot, Java 11, autenticación con JWT",
            "Creación del front con angular 11 y manejo de firma hash con llaves RSA",
            "Despliegue de aplicaciones en contenedor jboss 7",
            "Configuración de web server con apache y certificados SSL"
          ]
        },
        {
          name: "Servicios de verificación de información",
          details: [
            "Creación de servicios de validación de información con arquitectura APIs, Spring boot, Java 11",
            "Configuración de autenticación de tipo básica con spring Security",
            "Análisis y diseño de base datos con Toad Data Modeler y Postgresql",
            "Integración de servicios REST de terceros",
            "Despliegue de aplicativo en Jboss 7"
          ]
        }
      ]
    },
    {
      title: "Desarrollador BackEnd Java",
      company: "Cianet",
      period: "Enero 2017 - Noviembre 2017",
      location: "Presencial",
      description: [
        "Creación de servicios REST con Spring, Hibernate y JPA, autenticación con JWT",
        "Diseño y creación de Base de datos en SqlServer y PostgreSQL",
        "Creación y programación de Flujos BPMN con Activity BPMN",
        "Creación de reportes Ejecutivos con JaspertSoft"
      ]
    },
    {
      title: "Desarrollador BackEnd Java",
      company: "JR Quark Risk Managment",
      period: "Mayo - Diciembre 2016",
      location: "Presencial",
      description: [
        "Creación de servicios REST con Spring, Hibernate y JPA",
        "Análisis y diseño de Base de Datos con SqlServer"
      ]
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Experiencia Laboral</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={`${exp.company}-${exp.title}`}
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                  <div className="flex items-center gap-4 text-gray-600 mt-2">
                    <div className="flex items-center gap-1">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Actividades:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                {exp.achievements && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Logros:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {exp.projects && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Proyectos Destacados:</h4>
                    {exp.projects.map((project, i) => (
                      <div key={i} className="mb-3">
                        <h5 className="font-medium text-gray-700 mb-1">{project.name}</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                          {project.details.map((detail, j) => (
                            <li key={j}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                
                {exp.technologies && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience; 