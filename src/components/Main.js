import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import lebenslauf from '../assets/Musterlebenslauf.pdf';
import musterzeugnis from '../assets/Musterzeugnis.pdf';


function Main() {
  useEffect(() => {
    AOS.init({        // Quelle: https://www.npmjs.com/package/aos, Einstellungen ähnlich wie in den DOCS
      once: true,     
      duration: 1100, 
      offset: 200,
      delay: 100,
    });
  }, []);

  return (
    <section id="main" className="justify-content-center d-flex align-items-center flex-column bg-light text-center min-vh-100" data-aos="fade-up">
      <div className="container">
        <h1>Hallo, ich bin <span className="text-primary">Waldemar Hermann</span></h1>
        <p className="lead">Ich möchte mich vorstellen und von meiner Person erzählen</p>
        <a href="#about" className="btn-primary btn my-3">Mehr erfahren</a>
        <div className="mt-4">
          <a href={lebenslauf} className="btn-outline-primary btn me-2" download="Musterlebenslauf.pdf">Lebenslauf herunterladen</a>
          <a href={musterzeugnis} className="btn-outline-primary btn" download="Musterzeugnis.pdf">Notenspiegel herunterladen</a>
        </div>
      </div>
    </section>
  );
}

export default Main;
