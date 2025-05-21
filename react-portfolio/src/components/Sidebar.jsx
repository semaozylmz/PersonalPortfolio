import React, { useState } from 'react';

function Toast({ message, show, onClose }) {
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#4caf50',
        color: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        opacity: show ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: show ? 'auto' : 'none',
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
}

export default function Sidebar({ toggleDarkMode }) {
  const [toastVisible, setToastVisible] = useState(false);

  const handleCVDownload = () => {
    setToastVisible(true);
  };

  return (
    <aside className="sidebar">
      <h1 className="title">Sema Nur Özyılmaz</h1>
      <p className="subtitle">Bilgisayar Mühendisliği Öğrencisi</p>
      <nav>
        <ul>
          <li><a href="#about">Hakkımda</a></li>
          <li><a href="#projects">Projelerim</a></li>
          <li><a href="#certificates">Sertifikalarım</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>
      </nav>

      {/* CV İndir Butonu */}
      <a
        href="/SemaNurOzyilmazCV.pdf"
        download="SemaNurOzyilmazCV.pdf"
        className="cv-button"
        onClick={handleCVDownload}
      >
        CV İndir
      </a>

      {/* Dark Mode Butonu */}
      <button id="dark-mode-toggle" onClick={toggleDarkMode}>
        Renk Modu Değiştir
      </button>

      {/* Toast Bildirimi */}
      <Toast
        message="CV indiriliyor..."
        show={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </aside>
  );
}
