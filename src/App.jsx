import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { User, Code, Briefcase, FolderOpen, Mail } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'Quién Soy', icon: <User size={20} /> },
    { id: 'skills', label: 'Habilidades', icon: <Code size={20} /> },
    { id: 'experience', label: 'Experiencia', icon: <Briefcase size={20} /> },
    { id: 'projects', label: 'Proyectos', icon: <FolderOpen size={20} /> },
    { id: 'contact', label: 'Contacto', icon: <Mail size={20} /> }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-center gap-1 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="py-8">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
