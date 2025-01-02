import React, { useState } from "react";

function Navbar() {
  // Status der Navigation wird gesteuert
  const [isOpen, setIsOpen] = useState(false);

  // Hier wird die Navigation geschlossen oder geöffnet
  const handleSwitch = () => {
    setIsOpen(!isOpen);
  };

  /* Sobald im Navigationsmenü ein Unterpunkt geklickt wird, schließt das Menü. 
  Siehe unten 'onClick={closeNavbarMenu}' */
  const closeNavbarMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar bg-light navbar-light fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={handleSwitch}>
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Wenn 'isOpen' true, dann wird 'show' hinzugefügt. 'show' ist eine Klasse in Bootstrap, die
        die hier für das Anzeigen der Navbar zuständig ist. */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#main" onClick={closeNavbarMenu}>Start</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNavbarMenu}>Über mich</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeNavbarMenu}>Projekte</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNavbarMenu}>Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
