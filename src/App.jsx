import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  // Bu effect sayesinde body'ye class ekleniyor
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className="wrapper">
      <Sidebar toggleDarkMode={toggleDarkMode} />
      <main className="content">
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;
