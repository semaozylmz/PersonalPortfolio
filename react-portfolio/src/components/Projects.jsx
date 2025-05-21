import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    category: 'web',
    title: 'Frontend Mentor Projects',
    description: 'Frontend becerilerimi geliştirmek için tamamladığım küçük projeler ve kodlama meydan okumaları.',
    link: 'https://github.com/semaozylmz/frontend-mentor-projects',
  },
  {
    id: 2,
    category: 'ai',
    title: 'Machine Learning Projects',
    description: 'Gerçek dünya veri setleri ile makine öğrenmesi algoritmalarını test ettiğim dört farklı proje.',
    link: 'https://github.com/semaozylmz/machine-learning-projects',
  },
  {
    id: 3,
    category: 'mobil',
    title: 'Swift Calculator',
    description: 'Swift kullanarak geliştirdiğim basit ve etkili bir hesap makinesi uygulaması.',
    link: 'https://github.com/semaozylmz/calculator',
  },
  {
    id: 4,
    category: 'web',
    title: 'Spotify Clone',
    description: 'React + Vite ile geliştirilmiş, müzik platformu mantığında çalışan minimal bir arayüz.',
    link: 'https://github.com/semaozylmz/Spotify_clone',
  },
  {
    id: 5,
    category: 'web',
    title: 'Calendar',
    description: 'JavaScript ile geliştirdiğim modern ve interaktif bir takvim uygulaması.',
    link: 'https://github.com/semaozylmz/Calendar',
  },
  {
    id: 6,
    category: 'ai',
    title: 'Türkçe Duygu Analizi',
    description: 'Türkçe metinler üzerinde duygusal tonları analiz eden bir yapay zekâ projesi.',
    link: 'https://github.com/semaozylmz/Turkish-Sentiment-Analysis',
  },
  {
    id: 7,
    category: 'web',
    title: 'GameVerse',
    description: 'Birden fazla oyunu içinde barındıran, eğlenceli bir web platformu.',
    link: 'https://github.com/semaozylmz/GameVerse',
  },
  {
    id: 8,
    category: 'web',
    title: 'Nova Blog Website',
    description: 'HTML, CSS ve JavaScript ile tasarlanmış, interaktif bir blog platformu.',
    link: 'https://github.com/semaozylmz/NovaBlogWebsite',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="card">
      <h2>📜 Projelerim</h2>

      <div className="filter-buttons">
        <button className="filter-btn" onClick={() => setFilter('all')}>Tüm Projeler</button>
        <button className="filter-btn" onClick={() => setFilter('web')}>Web Development</button>
        <button className="filter-btn" onClick={() => setFilter('ai')}>AI & Data Science</button>
        <button className="filter-btn" onClick={() => setFilter('mobil')}>Mobil</button>
      </div>

      {filteredProjects.map(({ id, title, description, link, category }) => (
        <div key={id} className="project-card" data-category={category}>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">Projeyi İncele</a>
        </div>
      ))}
    </section>
  );
}
