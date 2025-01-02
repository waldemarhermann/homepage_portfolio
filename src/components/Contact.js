import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-secondary text-white" data-aos="fade-right">
      <div className="container">
        <h2 className="text-center fw-bold text-uppercase mb-4">Kontakt</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" placeholder="Namen eingeben" className="form-control" name="name" required/>
              </div>
              <div className="mb-3">
                <label className="form-label">E-Mail</label>
                <input type="email" placeholder="E-Mail-Adresse eingeben" className="form-control" name="email" required/>
              </div>
              <div className="mb-3">
                <label className="form-label">Betreff</label>
                <input type="text" placeholder="Betreff eingeben" className="form-control" name="betreff" required/>
              </div>
              <div className="mb-3">
                <label className="form-label">Nachricht</label>
                <textarea rows="6" placeholder="Nachricht eingeben" className="form-control" name="nachricht" required></textarea>
              </div>
              <div className="d-grid">
                <a href="mailto:hermann.waldemar1995@gmail.com" className="btn btn-primary">Nachricht senden</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
