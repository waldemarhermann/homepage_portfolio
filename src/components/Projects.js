import React from 'react';
import cadapp from '../assets/CAD-App.png';
import todoapp from '../assets/todoapp.png';
import snakeapp from '../assets/snake.png';

function Projects() {
  // Array mit den jeweiligen Objekten wird erstellt
  const projectList = [
    {
      title: 'CAD-App (Java)',
      description: 'Eine App zur Erstellung und Bearbeitung von 2D-Grafiken.',
      image: cadapp,
      link: 'https://github.com/waldemarhermann/CADApp',
    },
    {
      title: 'To-Do-App (Java)',
      description: 'Desktop-App zur effizienten Verwaltung von Aufgaben.',
      image: todoapp,
      link: 'https://github.com/waldemarhermann/ToDoApp',
    },
    {
      title: 'Snake (JavaScript)',
      description: 'Ein einfaches klassisches Snake-Spiel aus den 1990er Jahren.',
      image: snakeapp,
      link: 'https://github.com/waldemarhermann/snakeapp',
    }
  ];

  return (
    <section id="projects" className="bg-light py-5" data-aos="fade-left">
      <div className="container">
        <h2 className="mb-5 text-center fw-bold text-uppercase">Projekte</h2>
        <div className="gy-4 row">
          
          {/* Jedes Objekt aus dem Array wird hier mit .map iteriert und die 
          spezifischen Eigenschaften zu den erstellten Cards zugewiesen */}
          {projectList.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="h-100 card shadow-sm">
                <img src={project.image} className="card-img-top" alt={project.title} style={{ height: '250px', objectFit: 'contain', backgroundColor: '#ffffff', }}/> 
                <div className="card-body"> 
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary">Sourcecode</a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
