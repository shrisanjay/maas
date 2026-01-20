import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">M</div>
              <span className="footer__logo-text">MAAS & CO</span>
            </Link>
            <p className="footer__tagline">
              Engineering strong foundations for energy and infrastructure. 
              Delivering reliable piling, drilling, and solar project solutions across India.
            </p>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Quick Links</h4>
            <div className="footer__links">
              <Link to="/" className="footer__link">Home</Link>
              <Link to="/about" className="footer__link">About Us</Link>
              <Link to="/services" className="footer__link">Services</Link>
              <Link to="/projects" className="footer__link">Projects</Link>
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Services</h4>
            <div className="footer__links">
              <Link to="/services" className="footer__link">Borewell & Drilling</Link>
              <Link to="/services" className="footer__link">Solar Projects</Link>
              <Link to="/services" className="footer__link">Construction & Piling</Link>
              <Link to="/services" className="footer__link">Mining Services</Link>
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Contact</h4>
            <div className="footer__links">
              <span className="footer__link">+91 93635 26497</span>
              <a href="mailto:maasgeotech24@gmail.com" className="footer__link">
                maasgeotech24@gmail.com
              </a>
              <span className="footer__link">Chennai – 600062</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} MAAS & CO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
