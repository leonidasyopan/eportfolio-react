import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <header id="fixedHeader">
        <div class="content-width">
          <a href="index.html">
            <img
              src="img/logo-leonidas-yopan-128x40-branca.png"
              alt="Leonidas Yopan Logo"
              id="logo"
            />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#portfolio-section">PORTFOLIO</a>
              </li>
              <li>
                <a href="#professional-profile">RESUME</a>
              </li>
              <li>
                <a href="#contact-section">CONTACT</a>
              </li>
            </ul>
          </nav>

          <div class="clear-float"></div>
        </div>
      </header>
      <main>
        <section id="image-section">
          <div id="full-page-image">
            <h1>Hello, I'm Leonidas Yopan</h1>
            <h2 id="rotatingHeading">Web Developer</h2>
          </div>
        </section>

        <div class="content-width">
          <section id="contact-section">
            <div>
              <i class="fas fa-envelope"></i>
              <a href="mailto:leonidasyopan@gmail.com" target="_blank">
                leonidasyopan@gmail.com
              </a>
            </div>
            <div>
              <i class="fa fa-phone"></i>
              <a href="tel:5548998235707" target="_blank">
                +55 48 99823-5707
              </a>
            </div>
            <div>
              <i class="fab fa-linkedin-in"></i>
              <a
                href="https://www.linkedin.com/in/leonidasyopan/"
                target="_blank"
              >
                @leonidasyopan
              </a>
            </div>
          </section>
        </div>

        <section id="download-resume">
          <p>Download my resume in a printable format (PDF).</p>

          <a href="download/resume.pdf" target="_blank">
            Download
          </a>
        </section>

        <div class="content-width">
          <section id="professional-profile">
            <div id="profile-headings">
              <h2 id="heading-name">Leonidas Yopan</h2>
              <h3 id="heading-title">
                Web Designer and Developer. Self proclaimed geek.
              </h3>
            </div>
            <section id="profile-picture">
              <figure>
                <img
                  src="img/profile-picture-leonidas.jpg"
                  alt="Photo of Leonidas Yopan"
                />
              </figure>
            </section>
            <section id="professional-description">
              <h2>Professional Profile</h2>
              <p>
                I developed my first websites when I was only 16 years old using
                plain HTML. I achieved this by opening the website’s source code
                and testing the code through trial and error. This was an
                amazing experience to start learning.
              </p>
              <p>
                I am 34 years old now, and my skills as a web developer,
                combined with my capacity for collaborating with other
                professionals, allows me to be a strong front-end developer.
              </p>
              <p>
                Most of my professional life I have owned my own business. I
                started the first one when I was only 23 years old. It was an
                English School. Nowadays, besides the English School - I stil
                own one - I also have a small Video Production company.
              </p>
              <p>
                This experience, of owning my own business has allowed me a very
                indept experience on how to deal with people. From dealing,
                serving and attending clients to managing and leading our staff.
                I believe I am a great team worker.
              </p>
            </section>
          </section>
        </div>

        <section id="portfolio-section">
          <div class="content-width">
            <h2>Portfolio</h2>
            <h3>Some samples of my work</h3>

            <h4>WordPress Websites | Real-Client Jobs</h4>

            <div class="portfolio-samples">
              <a href="https://kingdomforquilhinhas.com.br/" target="_blank">
                <figure>
                  <img
                    src="img/project-kingdom-forquilhinhas.jpg"
                    alt="Project Kingdom Forquilhinhas"
                  />
                  <figcaption>Kingdom Forquilhinhas Project</figcaption>
                </figure>
              </a>
              <a href="http://origemcomunicacao.com/" target="_blank">
                <figure>
                  <img
                    src="img/project-origem-comunicacao.jpg"
                    alt="Project Origem Comunicação"
                  />
                  <figcaption>Origem Comunicação Project</figcaption>
                </figure>
              </a>
              <a href="http://aguiavideos.com.br/" target="_blank">
                <figure>
                  <img
                    src="img/project-aguia-videos.jpg"
                    alt="Project Águia Vídeos"
                  />
                  <figcaption>Águia Vídeos Project</figcaption>
                </figure>
              </a>
            </div>

            <div class="portfolio-samples">
              <a href="http://pizzaria.leonidasyopan.com/" target="_blank">
                <figure>
                  <img
                    src="img/project-don-pizzaria.jpg"
                    alt="Project Don Pizzaria"
                  />
                  <figcaption>Project Don Pizzaria</figcaption>
                </figure>
              </a>
            </div>

            <h4>Fully Coded Websites | College Projects</h4>

            <div class="portfolio-samples">
              <a href="http://futebolinternacional.com/" target="_blank">
                <figure>
                  <img
                    src="img/project-futebol-internacional.jpg"
                    alt="Project Futebol Internacional"
                  />
                  <figcaption>Futebol Internacional Project</figcaption>
                </figure>
              </a>
              <a href="https://acme.leonidasyopan.com/" target="_blank">
                <figure>
                  <img src="img/project-acme-college.jpg" alt="Project Acme" />
                  <figcaption>Project Acme</figcaption>
                </figure>
              </a>
              <a
                href="http://cit261.leonidasyopan.com/final-project/"
                target="_blank"
              >
                <figure>
                  <img src="img/project-app-futebol.jpg" alt="Futebol App" />
                  <figcaption>Premiere League App</figcaption>
                </figure>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section id="contact-information-footer">
          <div class="content-width">
            <div>
              <h2>Contact Me</h2>
              <p>
                I look forward to talking to you and dicussing our future work
                together.
              </p>
            </div>

            <div>
              <p>These are the most efficient ways to get in touch with me.</p>

              <ul class="icon-list">
                <li>
                  <a
                    href="https://www.facebook.com/leonidasyopan"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-f"></i>@leonidasyopan
                  </a>
                </li>
                <li>
                  <a href="tel:5548998235707" target="_blank">
                    <i class="fa fa-phone"></i>+55 48 99823-5707
                  </a>
                </li>
                <li>
                  <a href="mailto:leonidasyopan@gmail.com" target="_blank">
                    <i class="fas fa-envelope"></i>leonidasyopan@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/leonidasyopan" target="_blank">
                    <i class="fab fa-github"></i>@leonidasyopan
                  </a>
                </li>
                <li>
                  <a href="http://leonidasyopan.com/" target="_blank">
                    <i class="fa fa-globe"></i>leonidasyopan.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="copyright-information-footer">
          <div class="content-width">
            <p class="copy">© 2019 Leonidas Yopan, All Rights Reserved.</p>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
