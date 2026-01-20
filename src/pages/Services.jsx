function Services() {
  const solarServices = [
    'Land Grading & Leveling',
    'Construction of Main Control Room Building, Inverter Shed, Switchyard',
    'Plant Fencing, Boundary wall, Internal Roads, Piling and Drains',
    'Installation & Commissioning activities',
    'Piling for Solar Power Plants',
    'Module Mounting Structure (MMS) installation',
    'Solar utility-scale and commercial projects'
  ]

  const pilingServices = [
    'Bored & Cast-In-Situ Piling',
    'Micro Piling & Retrofitting',
    'Test piling and load testing',
    'Foundations for industrial infrastructure'
  ]

  const drillingServices = [
    'Soil Investigation & Drilling',
    'Auger & DTH Drilling',
    'Custom drilling for challenging terrains'
  ]

  const precastServices = [
    'Precast boundary wall supply and erection',
    'Supply of RCC Precast Post and wall panels',
    'Erection: Marking, Auger/DTH drilling, Post & Panel Erection',
    'Commercial and Industrial building construction (PEB)'
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__content">
            <span className="page-header__badge">Our Services</span>
            <h1 className="page-header__title">Comprehensive Engineering Solutions</h1>
            <p className="page-header__description">
              From concept to commissioning, we deliver end-to-end services for solar, 
              infrastructure, and industrial projects
            </p>
          </div>
        </div>
      </section>

      {/* Solar Power Projects */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-image">
              <img src="src\images\solar-piling-services-7.jpg" alt="Solar Power Projects" />
            </div>
            <div className="content-text">
              <h2 className="content-text__title">Solar Power Projects</h2>
              <p className="content-text__description">
                From concept to commissioning, we provide end-to-end execution for utility-scale 
                and commercial solar power plants.
              </p>
              <div className="content-list">
                {solarServices.map((service, index) => (
                  <div key={index} className="content-list__item">
                    <span className="content-list__icon">✓</span>
                    <span className="content-list__text">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Piling & Foundation */}
      <section className="section section--light">
        <div className="container">
          <div className="content-grid" style={{ direction: 'rtl' }}>
            <div className="content-image" style={{ direction: 'ltr' }}>
              <img src="/images/service-piling.jpg" alt="Piling & Foundation" />
            </div>
            <div className="content-text" style={{ direction: 'ltr' }}>
              <h2 className="content-text__title">Piling & Foundation</h2>
              <p className="content-text__description">
                Expert piling solutions including bored, micro, and retrofitting for structural stability.
              </p>
              <div className="content-list">
                {pilingServices.map((service, index) => (
                  <div key={index} className="content-list__item">
                    <span className="content-list__icon">✓</span>
                    <span className="content-list__text">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soil Investigation & Drilling */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-image">
              <img src="/images/service-drilling.jpg" alt="Soil Investigation & Drilling" />
            </div>
            <div className="content-text">
              <h2 className="content-text__title">Soil Investigation & Drilling</h2>
              <p className="content-text__description">
                Comprehensive geotechnical drilling and soil testing for precise foundation planning.
              </p>
              <div className="content-list">
                {drillingServices.map((service, index) => (
                  <div key={index} className="content-list__item">
                    <span className="content-list__icon">✓</span>
                    <span className="content-list__text">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precast Boundary Walls */}
      <section className="section section--light">
        <div className="container">
          <div className="content-grid" style={{ direction: 'rtl' }}>
            <div className="content-image" style={{ direction: 'ltr' }}>
              <img src="/images/service-precast.jpg" alt="Precast Boundary Walls" />
            </div>
            <div className="content-text" style={{ direction: 'ltr' }}>
              <h2 className="content-text__title">Precast Boundary Walls & PEB</h2>
              <p className="content-text__description">
                End-to-end solutions for precast boundary walls and industrial structural construction.
              </p>
              <div className="content-list">
                {precastServices.map((service, index) => (
                  <div key={index} className="content-list__item">
                    <span className="content-list__icon">✓</span>
                    <span className="content-list__text">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
