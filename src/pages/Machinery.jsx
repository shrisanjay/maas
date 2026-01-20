function Machinery() {
  const equipment = [
    {
      icon: '📍',
      title: 'Total Station',
      description: 'High-precision surveying instrument for accurate site measurements and pile marking'
    },
    {
      icon: '🔩',
      title: 'DTH Drilling Machines',
      description: 'Down-the-hole drilling equipment for efficient pile hole creation in various soil conditions'
    },
    {
      icon: '🚜',
      title: 'JCB Excavators',
      description: 'Versatile earthmoving equipment for site preparation and material handling'
    },
    {
      icon: '🏗️',
      title: 'Self-Loading Concrete Mixers',
      description: 'Mobile concrete mixing units for on-site pile casting and construction work'
    },
    {
      icon: '⚙️',
      title: 'Heavy Piling Equipment',
      description: 'Specialized machinery for large-scale foundation and piling operations'
    },
    {
      icon: '🔧',
      title: 'Auger Drilling Machines',
      description: 'Rotary drilling equipment for borewell and foundation drilling applications'
    }
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__content">
            <span className="page-header__badge">Our Equipment</span>
            <h1 className="page-header__title">Machinery & Technology</h1>
            <p className="page-header__description">
              Modern equipment and advanced technology for precision engineering
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__badge">Key Equipment</span>
            <h2 className="section-header__title">
              Our <span>Machinery</span>
            </h2>
            <p className="section-header__description">
              We deploy modern machinery and surveying instruments to ensure precision 
              and efficiency on every project.
            </p>
          </div>
          <div className="content-image" style={{ marginBottom: 'var(--space-12)', borderRadius: 'var(--radius-2xl)', overflow: 'hidden' }}>
            <img src="src/images/project-site-9.jpg" alt="Modern Piling Machinery" />
          </div>
          <div className="machinery-grid">
            {equipment.map((item, index) => (
              <div key={index} className="machinery-card">
                <div className="machinery-card__icon">{item.icon}</div>
                <h3 className="machinery-card__title">{item.title}</h3>
                <p className="machinery-card__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <span className="section-header__badge">Capabilities</span>
            <h2 className="section-header__title">
              Technical <span>Expertise</span>
            </h2>
          </div>
          <div className="stats">
            <div className="stat-item">
              <div className="stat-item__value">50+</div>
              <div className="stat-item__label">Equipment Units</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__value">24/7</div>
              <div className="stat-item__label">Operational Support</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__value">100%</div>
              <div className="stat-item__label">Safety Compliance</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__value">Pan-India</div>
              <div className="stat-item__label">Service Coverage</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Machinery
