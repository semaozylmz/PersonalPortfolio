import React from "react";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github.svg";
import GmailIcon from "../assets/icons/gmail.svg";

export default function Contact() {
  return (
    <section id="contact" className="card">
      <h2>📩 İletişim</h2>
      <ul className="contact-list">
        <li>
          <img src={GmailIcon} alt="Email icon" className="icon" />
          <strong>Email:</strong>{" "}
          <a href="mailto:semanrozyilmaz@gmail.com">semanrozyilmaz@gmail.com</a>
        </li>
        <li>
          <img src={LinkedinIcon} alt="LinkedIn icon" className="icon" />
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/sema-nur-ozyilmaz0903/"
            target="_blank"
          >
            linkedin.com/in/sema-nur-ozyilmaz0903
          </a>
        </li>
        <li>
          <img src={GithubIcon} alt="GitHub icon" className="icon" />
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/semaozylmz" target="_blank">
            github.com/semaozylmz
          </a>
        </li>
        <li>
          📞 <strong>Telefon:</strong>{" "}
          <a href="tel:+905061347089">+90 506 134 7089</a>
        </li>
      </ul>
      <p>
        Projelerimi incelemek veya profesyonel ağımı genişletmek için benimle
        iletişime geçebilirsin!
      </p>
    </section>
  );
}
