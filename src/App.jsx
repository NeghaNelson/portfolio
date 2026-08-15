import React, { useState, useEffect } from 'react';
import heroImage from '../image1.jpeg';
import { 
  GitBranch, 
  Link,
  Mail, 
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
  // Resume button removed

  // Magnify on hover effect
  useEffect(() => {
    const handleMouseEnter = (e) => {
      e.target.style.transform = 'scale(1.1)';
      e.target.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    };

    const handleMouseLeave = (e) => {
      e.target.style.transform = 'scale(1)';
    };

    // Special handler for profile image - add blue glow
    const profileImg = document.querySelector('img[alt="Profile"]');
    if (profileImg) {
      profileImg.addEventListener('mouseenter', () => {
        profileImg.style.boxShadow = '0 0 30px 15px rgba(168, 85, 247, 0.6), 0 0 60px 30px rgba(168, 85, 247, 0.3)';
        profileImg.style.transition = 'box-shadow 0.3s ease-out';
      });
      profileImg.addEventListener('mouseleave', () => {
        profileImg.style.boxShadow = 'none';
      });
    }

    // Target text elements
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span');
    textElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      if (profileImg) {
        profileImg.removeEventListener('mouseenter', handleMouseEnter);
        profileImg.removeEventListener('mouseleave', handleMouseLeave);
      }
      textElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Custom cursor with glowing dot and trailing circle
  useEffect(() => {
    // Create cursor elements
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: radial-gradient(circle, rgba(168, 85, 247, 1), rgba(168, 85, 247, 0.5));
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      box-shadow: 0 0 10px rgba(168, 85, 247, 0.8);
      display: none;
    `;

    const circle = document.createElement('div');
    circle.className = 'cursor-circle';
    circle.style.cssText = `
      position: fixed;
      width: 30px;
      height: 30px;
      border: 2px solid rgba(168, 85, 247, 0.6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      display: none;
    `;

    document.body.appendChild(dot);
    document.body.appendChild(circle);

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Move dot immediately
      dot.style.left = mouseX - 5 + 'px';
      dot.style.top = mouseY - 5 + 'px';
      dot.style.display = 'block';

      // Move circle with delay/lerp
      circleX += (mouseX - circleX) * 0.2;
      circleY += (mouseY - circleY) * 0.2;
      circle.style.left = circleX - 15 + 'px';
      circle.style.top = circleY - 15 + 'px';
      circle.style.display = 'block';
    };

    const handleMouseEnter = () => {
      dot.style.display = 'block';
      circle.style.display = 'block';
    };

    const handleMouseLeave = () => {
      dot.style.display = 'none';
      circle.style.display = 'none';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      dot.remove();
      circle.remove();
    };
  }, []);

  // Magnetic buttons effect
  useEffect(() => {
    const magneticButtons = document.querySelectorAll('a[target="_blank"], .magnetic-button');
    
    magneticButtons.forEach(button => {
      const handleMouseMove = (e) => {
        const rect = button.getBoundingClientRect();
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;

        const distance = Math.hypot(e.clientX - buttonCenterX, e.clientY - buttonCenterY);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const angle = Math.atan2(e.clientY - buttonCenterY, e.clientX - buttonCenterX);
          const pull = (1 - distance / maxDistance) * 20;

          button.style.transform = `translate(${Math.cos(angle) * pull}px, ${Math.sin(angle) * pull}px)`;
          button.style.transition = 'transform 0.1s ease-out';
        } else {
          button.style.transform = 'translate(0, 0)';
          button.style.transition = 'transform 0.3s ease-out';
        }
      };

      const handleMouseLeave = () => {
        button.style.transform = 'translate(0, 0)';
        button.style.transition = 'transform 0.3s ease-out';
      };

      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  // Scroll animations for About and Skills sections
  useEffect(() => {
    // Add animation styles to head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeSlideUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes cardAppear {
        from {
          opacity: 0;
          transform: scale(0.9) translateY(30px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      .scroll-animate-about {
        animation: fadeSlideUp 0.8s ease-out forwards;
      }

      .scroll-animate-card {
        animation: cardAppear 0.6s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    // Intersection Observer for About section
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // About section animation
          if (entry.target.id === 'about') {
            const children = entry.target.querySelectorAll('div, h2, p');
            children.forEach((child, index) => {
              child.style.animationDelay = `${index * 0.1}s`;
              child.classList.add('scroll-animate-about');
            });
            observer.unobserve(entry.target);
          }

          // Skills section - animate cards one by one
          if (entry.target.id === 'skills') {
            const skillCards = entry.target.querySelectorAll('.skill-card, div[class*="flex"][class*="flex-col"]');
            let cardCount = 0;
            skillCards.forEach((card) => {
              if (card.textContent.length > 10) { // Filter actual skill cards
                card.style.animationDelay = `${cardCount * 0.15}s`;
                card.classList.add('scroll-animate-card');
                cardCount++;
              }
            });
            observer.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    // Observe sections
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');

    if (aboutSection) observer.observe(aboutSection);
    if (skillsSection) observer.observe(skillsSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
      if (skillsSection) observer.unobserve(skillsSection);
      style.remove();
    };
  }, []);

  // Blue glitters falling animation on page load
  useEffect(() => {
    const glitterStyle = document.createElement('style');
    glitterStyle.textContent = `
      @keyframes fall {
        to {
          transform: translateY(100vh) translateX(0);
          opacity: 0;
        }
      }

      @keyframes twinkle {
        0%, 100% {
          opacity: 0.3;
        }
        50% {
          opacity: 1;
        }
      }

      .glitter {
        position: fixed;
        top: -10px;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, rgba(59, 130, 246, 1), rgba(59, 130, 246, 0.5));
        border-radius: 50%;
        box-shadow: 0 0 6px rgba(59, 130, 246, 0.8);
        pointer-events: none;
        z-index: 5000;
        animation: fall linear forwards, twinkle 0.6s ease-in-out infinite;
      }
    `;
    document.head.appendChild(glitterStyle);

    // Create falling glitters
    const createGlitter = () => {
      const glitter = document.createElement('div');
      glitter.className = 'glitter';
      
      const randomX = Math.random() * window.innerWidth;
      const randomDuration = 2 + Math.random() * 1.5; // 2-3.5 seconds
      const randomDelay = Math.random() * 5; // Spread throughout 5 seconds
      
      glitter.style.left = randomX + 'px';
      glitter.style.animationDuration = randomDuration + 's, 0.6s';
      glitter.style.animationDelay = '0s, ' + (Math.random() * 0.6) + 's';
      
      document.body.appendChild(glitter);
      
      // Remove glitter after animation
      setTimeout(() => {
        glitter.remove();
      }, randomDuration * 1000);
    };

    // Create glitters for 5 seconds
    const glitterInterval = setInterval(createGlitter, 100);
    
    // Stop creating new glitters after 5 seconds
    setTimeout(() => {
      clearInterval(glitterInterval);
      // Remove any remaining glitters after 8 seconds total
      setTimeout(() => {
        document.querySelectorAll('.glitter').forEach(g => g.remove());
      }, 3000);
    }, 5000);

    return () => {
      clearInterval(glitterInterval);
      glitterStyle.remove();
      document.querySelectorAll('.glitter').forEach(g => g.remove());
    };
  }, []);

  // Smooth scroll function
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-purple-500/30">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollTo('home')}>
            
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-purple-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="md:hidden text-sm font-semibold text-purple-400"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900 -z-10"></div>
        
        <div className="max-w-4xl w-full mx-auto text-center space-y-8 animate-fade-in-up">
          <img src={heroImage} alt="Profile" className="mx-auto w-52 h-52 md:w-56 md:h-56 rounded-full object-cover border-4 border-purple-500 shadow-2xl" />
          <p className="text-purple-400 font-mono tracking-wide">Hi, I'am</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Negha Nelson A
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
            I'm a B.Tech Computer Science student at Karunya Institute of Technology and Sciences, specializing in full-stack development and machine learning.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a href="https://github.com/NeghaNelson" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all border border-slate-700">
              <GitBranch size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/negha-nelson/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-all">
              <Link size={20} />
              LinkedIn
            </a>
            <a href={`${import.meta.env.BASE_URL}NeghaNelson_resume.pdf`} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-lg font-medium transition-all border border-purple-600">
              <ExternalLink size={20} />
              Resume
            </a>
          </div>
        </div>

        
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="text-purple-500" size={32} />
          <h2 className="text-3xl font-bold text-white">Education & Background</h2>
          <div className="flex-grow h-px bg-slate-800 ml-4"></div>
        </div>
        
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">B.Tech in Computer Science and Engineering</h3>
              <p className="text-purple-400">Karunya Institute of Technology and Sciences</p>
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
        <div className="grid gap-10 items-start">
          <div>
            <div className="flex items-center gap-4 mb-12">
              <Briefcase className="text-purple-500" size={32} />
              <h2 className="text-3xl font-bold text-white">Experience</h2>
              <div className="flex-grow h-px bg-slate-800 ml-4"></div>
            </div>

            <div className="relative border-l-2 border-slate-800 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
              <h3 className="text-2xl font-bold text-white">Software Intern</h3>
              <h4 className="text-lg text-purple-400 font-medium mb-2">Redintek solution</h4>
              <p className="text-slate-500 font-mono text-sm mb-4">Aug 2024 — Mar 2025</p>
              
              <ul className="space-y-3 text-slate-300 list-disc list-inside marker:text-purple-500">
                <li>Developed and maintained essential software modules, significantly improving overall system efficiency.</li>
                <li>Collaborated actively with the senior engineering team to debug critical issues.</li>
                <li>Worked mainly on backend development using FastAPI and PostgreSQL.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Code2 className="text-purple-500" size={32} />
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
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Distributed Emergency Alert & Response System</h3>
            <p className="text-slate-300 mb-6 line-clamp-3">Real-time emergency reporting platform using React,Express and MongoDB.</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-slate-900 rounded-full text-slate-300">React</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-slate-300">Express</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-slate-300">MongoDB</span>
            </div>
          </div>

          {/* Project 1 */}
          <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <Layout size={24} />
              </div>
              <a href="https://neghanelson.github.io/rebbus_clone_frontend/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">RedBus Clone</h3>
            <p className="text-slate-300 mb-6 line-clamp-3">A comprehensive bus booking application replicating core RedBus. Focuses on frontend using HTML and CSS</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-slate-900 rounded-full text-slate-300">HTML</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-slate-300">CSS</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <Database size={24} />
              </div>
              <a href="https://github.com/NeghaNelson/diabetic_retinopathy" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Diabetic Retinopathy Detection</h3>
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
          <Server className="text-purple-500" size={32} />
          <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
          <div className="flex-grow h-px bg-slate-800 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Python', 'SQL', 'HTML/CSS'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-md text-sm">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {['React.js'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-md text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Tools & Datastores</h3>
            <div className="flex flex-wrap gap-2">
              {['MongoDB', 'Git', 'GitHub', 'Docker', 'VS Code'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-md text-sm">{skill}</span>
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
          className="inline-flex items-center gap-2 bg-transparent hover:bg-purple-500/10 text-purple-400 font-medium px-8 py-4 border-2 border-purple-400 rounded-lg transition-colors"
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