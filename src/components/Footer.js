import React from "react";

function Footer() {
  return (
    <footer className="text-white bg-dark py-5">
      <div className="container text-center">
        <a href="#main" className="btn mb-4 rounded-circle btn-outline-light">
          <i className="bi-arrow-up bi" style={{ fontSize: "1.4rem" }}></i>
        </a>
        <div className="d-flex justify-content-center mb-4">
          <a href="https://x.com" className="text-white mx-3">
            <i className="bi-twitter-x bi" style={{ fontSize: "1.4rem" }}></i>
          </a>
          <a href="https://linkedin.com" className="text-white mx-3">
            <i className="bi-linkedin bi" style={{ fontSize: "1.4rem" }}></i>
          </a>
          <a
            href="https://github.com" className="text-white mx-3">
            <i className="bi-github bi" style={{ fontSize: "1.4rem" }}></i>
          </a>
        </div>
        <p className="m-0 text-secondary">&copy; 2024 Waldemar Hermann💙</p>
      </div>
    </footer>
  );
}

export default Footer;
