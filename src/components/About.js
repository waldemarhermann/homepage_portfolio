import React from "react";
import profileImage from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="d-flex text-white align-items-center bg-secondary min-vh-100 py-5" data-aos="fade-right">
      <div className="container">
        <h2 className="fw-bold text-center mb-4 text-uppercase">Über mich</h2>
        <div className="align-items-center row">
          <div className="text-center mb-lg-0 col-lg-4 mb-4">
            <img src={profileImage} alt="Ich" className="rounded shadow-lg" style={{ height: "auto", maxWidth: "100%"}}/>
          </div>
          <div className="col-lg-8">
            <p className="fs-4">
              Ende 2021 habe ich mit dem Programmieren angefangen. Damals war es nur ein Hobby, aber so langsam kam dann der Wunsch dieses Hobby zum Beruf zu machen.
              Mir gefällt, dass man kreativ beim Coden sein kann und es wie ein Handwerk ist, worin man sich stetig weiterentwickeln und verbessern kann.
              Regelmäßiges programmieren fördert die Logik und es wirkt sich auf andere Lebensbereiche positiv aus.
            </p>
            <p className="fs-4">
              Meine Schwerpunkte sind die Full-Stack-Entwicklung oder aber auch die Backend-
              Entwicklung. Ich konnte bereits Kenntnisse in Fronttechnologien wie JavaScript und React sammeln, die ich auf einem guten Niveau beherrsche.
              Momentan beschäftige ich neben meinem Studium mit Java, Spring Boot 3, Spring 6 und Hibernate. Mein Ziel ist es vor allem in den letzteren genannten Technologien
              meine Fähigkeiten weiter auszubauen um fehlerfreien und sauberen Code schreiben zu können.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
