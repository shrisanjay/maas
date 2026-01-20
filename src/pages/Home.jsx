import { Link } from 'react-router-dom'

function Home() {
  const services = [
    {
      icon: '🔧',
      title: 'Borewell & Drilling',
      description: 'Precision drilling and geotechnical solutions for industrial and infrastructure needs.',
      link: '/services'
    },
    {
      icon: '☀️',
      title: 'Solar Power Projects',
      description: 'End-to-end execution of utility-scale and commercial solar power plants.',
      link: '/services'
    },
    {
      icon: '⛏️',
      title: 'Mining Services',
      description: 'Robust drilling and foundation support for mining and heavy industrial operations.',
      link: '/services'
    },
    {
      icon: '🏗️',
      title: 'Construction & Piling',
      description: 'Specialized piling and foundation solutions for long-term structural stability.',
      link: '/services'
    }
  ]

  const industries = [
    { icon: '☀️', text: 'Renewable Energy (Solar Power Plants)' },
    { icon: '⛏️', text: 'Mining & Minerals' },
    { icon: '🏢', text: 'Infrastructure Development' },
    { icon: '🏭', text: 'Industrial & Commercial Construction' }
  ]

  const whyChooseUs = [
    { title: 'Proven Track Record', description: 'Successfully delivered large-scale solar projects across India' },
    { title: 'Expert Teams', description: 'Experienced engineering and project management professionals' },
    { title: 'Advanced Equipment', description: 'Modern piling and drilling machinery for precision work' },
    { title: 'Safety First', description: 'Commitment to safety, quality, and sustainable practices' },
    { title: 'Pan-India Reach', description: 'Capability to execute projects anywhere in India' }
  ]

  const stats = [
    { value: '1500+', label: 'MW Installed' },
    { value: '50+', label: 'Projects Completed' },
    { value: '10+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__grid"></div>
        <div className="container hero__container">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot"></span>
              Trusted Engineering Partner
            </div>
            <h1 className="hero__title">
              Strong foundations start with <span>trusted piling</span>
            </h1>
            <p className="hero__description">
              MAAS & CO is a specialized engineering and construction company delivering reliable 
              piling, drilling, solar project execution, and infrastructure solutions across India. 
              We build foundations that power growth, stability, and clean energy.
            </p>
            <div className="hero__buttons">
              <Link to="/services" className="btn btn--primary btn--large">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn btn--secondary btn--large">
                Contact Us
              </Link>
            </div>
            <div className="hero__stats">
              {stats.map((stat, index) => (
                <div key={index} className="hero__stat">
                  <div className="hero__stat-value">{stat.value}</div>
                  <div className="hero__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="section section--light">
        <div className="container">
          <div className="section-header">
            <span className="section-header__badge">About Us</span>
            <h2 className="section-header__title">
              Building <span>Trusted Foundations</span> Since Day One
            </h2>
            <p className="section-header__description">
              MAAS & CO is a specialized engineering company focused on delivering high-quality 
              piling and drilling services for solar power plants and a wide range of foundation works. 
              Founded with a commitment to building a sustainable future, we bring unmatched technical 
              expertise, advanced equipment, and a client-first approach to every project we execute.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__badge">Our Services</span>
            <h2 className="section-header__title">
              Comprehensive Engineering <span>Solutions</span>
            </h2>
            <p className="section-header__description">
              From concept to commissioning, we provide end-to-end services for solar power plants, 
              industrial infrastructure, and mining operations.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <Link to={service.link} className="service-card__link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section section--light">
        <div className="container">
          <div className="section-header">
            <span className="section-header__badge">Industries</span>
            <h2 className="section-header__title">
              Industries We <span>Serve</span>
            </h2>
          </div>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-item">
                <div className="industry-item__icon">{industry.icon}</div>
                <span className="industry-item__text">{industry.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <span className="section-header__badge">Our Impact</span>
            <h2 className="section-header__title">
              Numbers That <span>Speak</span>
            </h2>
          </div>
          <div className="stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-item__value">{stat.value}</div>
                <div className="stat-item__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__badge">Why MAAS & CO</span>
            <h2 className="section-header__title">
              Why Choose <span>Us</span>
            </h2>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-item">
                <div className="why-item__check">✓</div>
                <div className="why-item__content">
                  <h4 className="why-item__title">{item.title}</h4>
                  <p className="why-item__description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta__content">
            <h2 className="cta__title">Ready to Build Strong Foundations?</h2>
            <p className="cta__description">
              Partner with MAAS & CO for reliable engineering solutions. 
              Let's discuss your next project.
            </p>
            <Link to="/contact" className="btn btn--dark btn--large">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
