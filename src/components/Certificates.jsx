import React from 'react';

const certificates = [
  {
    id: 1,
    title: 'Versiyon Kontrolleri: Git ve GitHub',
    link: 'https://drive.google.com/file/d/1rqRlFySZqGnAtWAMkJ_iq8F8hCXkM8SJ/view?usp=drive_link',
  },
  {
    id: 2,
    title: 'Python ile Makine Öğrenmesi Uygulamaları',
    link: 'https://drive.google.com/file/d/1VMUF_VDsKCxQTfREIrl7FXhxSlsgFcBZ/view?usp=drive_link',
  },
  {
    id: 3,
    title: 'İş Bankası ProSchool Data & AI Class',
    link: 'https://drive.google.com/file/d/16OJ0L7psGXcTJkee38ynxX9vvn4LEAaF/view?usp=drive_link',
  },
  {
    id: 4,
    title: 'TEKNOLOJİDE FIRSAT EŞİTLİĞİ',
    link: 'https://drive.google.com/file/d/1PgG2dQHC0RDDDVFybirWoWUA8h1QjNCz/view?usp=drive_link',
  },
  {
    id: 5,
    title: 'React 401',
    link: 'https://drive.google.com/file/d/1ext3sy5xdqUHpXTsT_T_lRuMsODBtAd3/view?usp=drive_link',
  },
  {
    id: 6,
    title: 'Borusan Teknoloji Okulu',
    link: 'https://drive.google.com/file/d/1MxIclSXh3hIY3_ZmphBfOxBSsS4Wjlzx/view?usp=drive_link',
  },
  {
    id: 7,
    title: 'Udemy sıfırdan ileri düzey web geliştirme',
    link: 'https://drive.google.com/file/d/1_x0L18gShnt6gcGLvLFSOEpRdlIn06-x/view?usp=drive_link',
  },
  {
    id: 8,
    title: 'Derin Öğrenmeye Giriş',
    link: 'https://drive.google.com/file/d/1-KRGY5O6MyFYcvZ4SAtt0GDn6X6mE36x/view?usp=drive_link',
  },
  {
    id: 9,
    title: 'Pekiştirmeli Öğrenme',
    link: 'https://drive.google.com/file/d/1BnVn3HLz7jnHfLCyDtkuLEhB01r4Txhg/view?usp=drive_link',
  },
];



const driveFolderLink = 'https://drive.google.com/drive/folders/1IQfqxkB5ySKX2IwkoQWmzbGMNGgXNnFz?usp=share_link'; // Drive klasör linki buraya

export default function Certificates() {
  // İlk 11 sertifika gösterilecek, son kart + olacak
  const visibleCertificates = certificates.slice(0, 11);

  return (
    <section id="certificates" className="certificates-section">
      <h2>Sertifikalarım</h2>
      <div className="certificates-grid">
        {visibleCertificates.map(({ id, title, link }) => (
          <div key={id} className="certificate-card">
            <p>{title}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Sertifikayı Görüntüle
            </a>
          </div>
        ))}

        {/* Son kart: + işareti ve Drive klasörü linki */}
        <div className="certificate-card more-certs" onClick={() => window.open(driveFolderLink, '_blank')}>
          <span className="plus-icon">+</span>
          <p>Daha Fazlası</p>
        </div>
      </div>
    </section>
  );
}
