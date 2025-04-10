import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DecryptedText from './components/DecryptedText';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [showSection, setShowSection] = useState(false);
  const [nameDecrypted, setNameDecrypted] = useState(false);
  const [titleDecrypted, setTitleDecrypted] = useState(false);

  useEffect(() => {
    // Start the name decryption after a short delay
    const nameTimer = setTimeout(() => {
      setNameDecrypted(true);
    }, 800);
    
    // Start the title decryption after the name
    const titleTimer = setTimeout(() => {
      setTitleDecrypted(true);
    }, 1800);
    
    return () => {
      clearTimeout(nameTimer);
      clearTimeout(titleTimer);
    };
  }, []);

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setShowSection(false);
      setActiveSection(null);
    } else {
      setActiveSection(section);
      setShowSection(true);
    }
  };

  // Handle clicking outside to close the section
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSection && 
          !event.target.closest('.section-item') && 
          !event.target.closest('.floating-content')) {
        setShowSection(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSection]);

  const sections = {
    about: {
      title: "About Me",
      content: "I'm a passionate developer with 5+ years of experience building web applications. My expertise includes React, Node.js, and modern JavaScript frameworks. I enjoy creating intuitive user interfaces and solving complex problems."
    },
    skills: {
      title: "Skills & Expertise",
      content: "Frontend: React, Next.js, TypeScript, CSS/SCSS\nBackend: Node.js, Express, MongoDB\nTools: Git, Docker, AWS\nOther: UI/UX Design, Responsive Web Design, Performance Optimization"
    },
    projects: {
      title: "Projects",
      content: "Portfolio Website - A modern portfolio built with React and Framer Motion\nE-commerce Platform - Full-stack application using MERN stack\nAI Integration Tool - Connecting various ML models with web interfaces"
    },
    awards: {
      title: "Awards & Recognition",
      content: "Best Developer Award - TechConf 2024\nOpen Source Contributor - React Community\nHackathon Winner - Global Coding Challenge 2023"
    },
    contact: {
      title: "Contact",
      content: "Email: contact@example.com\nPhone: +1 (123) 456-7890\nLocation: San Francisco, CA"
    },
    socials: {
      title: "Social Links",
      content: "GitHub: github.com/yourusername\nLinkedIn: linkedin.com/in/yourprofile\nTwitter: twitter.com/yourhandle"
    },
  };

  return (
    <div className="min-h-screen font-sans relative">
      {/* Import Google Fonts in the head */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Raleway:wght@300;400;500;600&display=swap" />
      
      {/* Full-screen background spline model */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-auto">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-GLWdrRcis0d43ccFvHV6mHDJ/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="3D Robot Model Background"
        ></iframe>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 bg-opacity-70">
        {/* Header with decrypted name - both auto and on hover */}
        <header className="py-16 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <DecryptedText 
              text="S KAUSHIK RAO" 
              animateOn="manual"
              isManuallyTriggered={nameDecrypted}
              speed={150}
              maxIterations={25}
              revealDirection="center"
              className="text-black hover:text-blue-600 transition-colors duration-300"
              encryptedClassName="text-gray-500"
              parentClassName="cursor-pointer"
              onMouseEnter={() => setNameDecrypted(true)}
            />
          </h1>
          <h2 className="text-2xl text-gray-700 mt-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
            <DecryptedText 
              text="Frontend Engineer & UI/UX Designer" 
              animateOn="manual"
              isManuallyTriggered={titleDecrypted}
              speed={130}
              maxIterations={25}
              sequential={true}
              className="text-black hover:text-blue-600 transition-colors duration-300"
              encryptedClassName="text-gray-500"
              parentClassName="cursor-pointer"
              onMouseEnter={() => setTitleDecrypted(true)}
            />
          </h2>
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 pb-20 relative">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Left navigation - pushed further left */}
            <div className="md:w-1/4 mb-8 md:mb-0 md:-ml-16">
              <motion.nav className="flex flex-col space-y-20 md:sticky md:top-10">
                {Object.keys(sections).slice(0, 3).map((key) => (
                  <motion.div 
                    key={key}
                    className="cursor-pointer section-item"
                    onClick={() => handleSectionClick(key)}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <DecryptedText 
                      text={sections[key].title} 
                      speed={100}
                      className="text-black text-xl font-medium bg-white bg-opacity-70 px-4 py-2 rounded"
                      encryptedClassName="text-gray-400 text-xl font-medium bg-white bg-opacity-70 px-4 py-2 rounded"
                      parentClassName="block w-full"
                    />
                  </motion.div>
                ))}
              </motion.nav>
            </div>

            {/* Right navigation - pushed further right */}
            <div className="md:w-1/4 md:-mr-16">
              <motion.nav className="flex flex-col space-y-20 md:sticky md:top-10 items-end">
                {Object.keys(sections).slice(3).map((key) => (
                  <motion.div 
                    key={key}
                    className="cursor-pointer section-item"
                    onClick={() => handleSectionClick(key)}
                    whileHover={{ x: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <DecryptedText 
                      text={sections[key].title} 
                      speed={100}
                      className="text-black text-xl font-medium bg-white bg-opacity-70 px-4 py-2 rounded"
                      encryptedClassName="text-gray-400 text-xl font-medium bg-white bg-opacity-70 px-4 py-2 rounded"
                      parentClassName="block w-full text-right"
                    />
                  </motion.div>
                ))}
              </motion.nav>
            </div>
          </div>

          {/* Beautiful symmetric square floating content box */}
          <AnimatePresence>
            {showSection && (
              <motion.div 
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-10 rounded-xl shadow-2xl floating-content backdrop-blur-sm border border-gray-100"
                style={{ 
                  width: "450px", 
                  height: "450px",
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <button 
                  className="absolute top-4 right-4 text-gray-500 hover:text-black"
                  onClick={() => setShowSection(false)}
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  <DecryptedText 
                    text={sections[activeSection]?.title || ""} 
                    animateOn="view"
                    speed={100}
                    className="text-black"
                  />
                </h3>
                <div className="text-gray-700 whitespace-pre-line overflow-auto" style={{ 
                  fontFamily: "'Raleway', sans-serif",
                  maxHeight: "320px"
                }}>
                  {sections[activeSection]?.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="py-8 bg-white bg-opacity-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <DecryptedText 
              text="Now that You've Liked my portfolio, Let's talk. " 
              animateOn="view"
              speed={80}
              className="text-black"
              encryptedClassName="text-gray-500"
            />
          </div>
        </footer>
      </div>
    </div>
  );
}