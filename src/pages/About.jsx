function About() {
  const missions = [
    'To provide top-tier piling and drilling services with a focus on quality, precision, and environmental responsibility',
    'To support the rapid growth of solar and clean energy infrastructure through strong and dependable foundation solutions',
    'To build long-term partnerships based on trust, transparency, and engineering excellence',
    'To invest in modern technology and skilled manpower that ensures safe and efficient project execution'
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__content">
            <span className="page-header__badge">About Us</span>
            <h1 className="page-header__title">Building Strong Foundations</h1>
            <p className="page-header__description">
              Learn about our commitment to engineering excellence and sustainable development
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-image">
              <img src="/images/about-main.jpg" alt="MAAS & CO Project Site" />
            </div>
            <div className="content-text">
              <h2 className="content-text__title">About MAAS & CO</h2>
              <p className="content-text__description">
                MAAS & CO is a specialized engineering company focused on delivering high-quality 
                piling and drilling services for solar power plants and a wide range of foundation 
                works. Founded with a commitment to building a sustainable future, we bring 
                unmatched technical expertise, advanced equipment, and a client-first approach to 
                every project we execute.
              </p>
              <p className="content-text__description">
                From micro and bored piling to custom drilling solutions, we support solar 
                infrastructure and industrial developments across India by laying strong, stable 
                foundations that stand the test of time. Our team comprises experienced engineers, 
                skilled operators, and project managers who are passionate about precision, safety, 
                and reliability.
              </p>
              <p className="content-text__description">
                With a strong presence in the renewable energy sector, we are proud to contribute 
                to India's green growth by powering the backbone of solar energy projects. Our 
                services are designed to meet high engineering standards and are tailored to suit 
                varying geotechnical conditions, timelines, and budgetary constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section--light">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <div className="vision-card__icon">🎯</div>
              <h3 className="vision-card__title">Our Vision</h3>
              <p className="vision-card__text">
                To be a leading force in foundation engineering, enabling sustainable infrastructure 
                by delivering safe, reliable, and innovative piling and drilling solutions for the 
                renewable energy sector and beyond.
              </p>
            </div>
            <div className="vision-card">
              <div className="vision-card__icon">🚀</div>
              <h3 className="vision-card__title">Our Mission</h3>
              <p className="vision-card__text">
                To provide top-tier piling and drilling services while supporting the rapid growth 
                of solar and clean energy infrastructure across India through dependability and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Points */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__badge">Our Commitment</span>
            <h2 className="section-header__title">
              Mission <span>Pillars</span>
            </h2>
          </div>
          <div className="mission-grid">
            {missions.map((mission, index) => (
              <div key={index} className="mission-card">
                <div className="mission-card__number">{String(index + 1).padStart(2, '0')}</div>
                <p className="mission-card__text">{mission}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
