import React, { useState } from 'react';
import heroImage from '../image1.jpeg';
import snapshotImage from '../image2.jpeg';
import resumePdf from './NeghaResume.pdf';
import { 
  GitBranch, 
  Link,
  Mail, 
  FileText, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  ChevronDown,
  ExternalLink,
  Server,
  Database,
  Layout
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollTo('home')}>
            
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="md:hidden text-sm font-semibold text-blue-400"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900 -z-10"></div>
        
        <div className="max-w-4xl w-full mx-auto text-center space-y-8 animate-fade-in-up">
          <img src={heroImage} alt="Profile" className="mx-auto w-52 h-52 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-500 shadow-2xl" />
          <p className="text-blue-400 font-mono tracking-wide">Hi, I'am</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Negha Nelson A.
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
            I'm a B.Tech Computer Science student at Karunya Institute of Technology and Sciences, specializing in full-stack development and machine learning.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a href={resumePdf} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1">
              <FileText size={20} />
              View Resume
            </a>
            <a href="https://github.com/NeghaNelson" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all border border-slate-700 transform hover:-translate-y-1">
              <GitBranch size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/negha-nelson/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#084e96] text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1">
              <Link size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce cursor-pointer text-slate-500 hover:text-blue-400 transition-colors" onClick={() => scrollTo('about')}>
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="text-blue-500" size={32} />
          <h2 className="text-3xl font-bold text-white">Education & Background</h2>
          <div className="flex-grow h-px bg-slate-800 ml-4"></div>
        </div>
        
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">B.Tech in Computer Science and Engineering</h3>
              <p className="text-blue-400">Karunya Institute of Technology and Sciences</p>
            </div>
            <div className="text-slate-400 font-mono mt-2 md:mt-0">2023 — 2027</div>
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">
            My academic focus revolves around Data Structures & Algorithms, Object-Oriented Programming, and Web Development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400">
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <span className="font-semibold text-slate-300 block mb-1">Class XII (CBSE)</span>
              Sri Chaitanya PU College • 75%
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <span className="font-semibold text-slate-300 block mb-1">Class X (ICSE)</span>
              HAL Gnanajyothi School • 93%
            </div>
          </div>
        </div>
      </section>


      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_0.95fr] items-start">
          <div>
            <div className="flex items-center gap-4 mb-12">
              <Briefcase className="text-blue-500" size={32} />
              <h2 className="text-3xl font-bold text-white">Experience</h2>
              <div className="flex-grow h-px bg-slate-800 ml-4"></div>
            </div>

            <div className="relative border-l-2 border-slate-800 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <h3 className="text-2xl font-bold text-white">Software Intern</h3>
              <h4 className="text-lg text-blue-400 font-medium mb-2">Redintek solution</h4>
              <p className="text-slate-500 font-mono text-sm mb-4">Aug 2024 — Mar 2025</p>
              
              <ul className="space-y-3 text-slate-300 list-disc list-inside marker:text-blue-500">
                <li>Developed and maintained essential software modules, significantly improving overall system efficiency.</li>
                <li>Collaborated actively with the senior engineering team to debug critical issues.</li>
                <li>Worked mainly on backend development using FastAPI and PostgreSQL.</li>
              </ul>
            </div>
          </div>

          <div className="relative mx-auto overflow-hidden border border-slate-700 shadow-2xl h-[520px] w-[520px] rounded-full">
            <img src={snapshotImage} alt="Experience highlight" className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Code2 className="text-blue-500" size={32} />
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <div className="flex-grow h-px bg-slate-800 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* DEARS Project */}
          <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <Server size={24} />
              </div>
              <a href="https://github.com/NeghaNelson/disaster-management" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Distributed Emergency Alert & Response System</h3>
            <p className="text-slate-300 mb-6 line-clamp-3">Real-time emergency reporting platform using React,Express and MongoDB.</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-slate-900 rounded-full text-slate-300">React</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-slate-300">Express</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-slate-300">MongoDB</span>
            </div>
          </div>

          {/* Project 1 */}
          <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <Layout size={24} />
              </div>
              <a href="https://neghanelson.github.io/rebbus_clone_frontend/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">RedBus Clone</h3>
            <p className="text-slate-300 mb-6 line-clamp-3">A comprehensive bus booking application replicating core RedBus. Focuses on frontend using HTML and CSS</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-slate-900 rounded-full text-slate-300">HTML</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-slate-300">CSS</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                <Database size={24} />
              </div>
              <a href="https://github.com/NeghaNelson/diabetic-retinopathy" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">Diabetic Retinopathy Detection</h3>
            <p className="text-slate-300 mb-6 line-clamp-3">An academic machine learning model designed to analyze retinal images and detect early signs of Diabetic Retinopathy.</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-slate-900 rounded-full text-slate-300">Python</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-slate-300">TensorFlow/Keras</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-slate-300">OpenCV</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Server className="text-blue-500" size={32} />
          <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
          <div className="flex-grow h-px bg-slate-800 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Python', 'SQL', 'HTML/CSS'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md text-sm">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {['React.js'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Tools & Datastores</h3>
            <div className="flex flex-wrap gap-2">
              {['MongoDB', 'Git', 'GitHub', 'Docker', 'VS Code'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="max-w-md mx-auto text-slate-400 mb-10">
          I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=neghaaloor@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-transparent hover:bg-blue-500/10 text-blue-400 font-medium px-8 py-4 border-2 border-blue-400 rounded-lg transition-colors"
        >
          <Mail size={20} />
          Say Hello
        </a>
      </section>

      <footer className="text-center py-8 text-sm text-slate-500 border-t border-slate-800">
        <p className="mt-1">©Negha Nelson A. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;