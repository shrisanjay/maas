function Projects() {
  const currentProjects = [
    {
      client: 'Adani Green Energy Ltd',
      title: 'Solar PV Project',
      location: 'Khavda, Gujarat',
      badge: 'Current',
      image: '/images/project-adani.jpg',
      scope: [
        'Land grading and leveling',
        'Piling for MMS structures',
        'MMS installation and alignment',
        'Complete project site logistics'
      ]
    },
    {
      client: 'Ayana Renewables',
      title: 'Solar Power Plant',
      location: 'Karnataka',
      badge: 'Current',
      image: '/images/project-ayana.jpg',
      scope: [
        'Foundational piling works',
        'Structural steel supply',
        'Drainage and road construction',
        'Installation of solar structures'
      ]
    }
  ]

  const pastProjects = [
    { client: 'Avaada', endCustomer: 'Avaada', location: 'Kalburgi KA', capacity: '75 MW', scope: 'Complete Installation and commissioning' },
    { client: 'Avaada', endCustomer: 'Avaada', location: 'Kalburgi KA', capacity: '100 MW', scope: 'Complete Installation and commissioning' },
    { client: 'Ayana Renewables', endCustomer: 'Ayana', location: 'Pavagada KA', capacity: '300 MW', scope: 'Supply of Fencing materials' },
    { client: 'Faben India', endCustomer: 'Avaada', location: 'Trichy TN', capacity: '150 MW', scope: 'Supply & Erection of Boundary fencing 34 KM, IDT Fencing & shed; Construction of ICR civil works, MCR building, Piling, Road' },
    { client: 'Andhra Cements', endCustomer: 'Andhra Cements', location: 'Dachepalli', capacity: '50 MW', scope: 'Complete Land Grading and test piling, Piling and MMS installation, MCR and IDT foundation, Switchyard' },
    { client: 'Ultratech Cements', endCustomer: 'Ultratech Cements', location: 'Tadipatri', capacity: '350 MW', scope: 'Complete Land Grading and test piling, Piling and MMS installation, MCR and IDT foundation' },
    { client: 'Arjas Steels', endCustomer: 'Arjas Steels', location: 'Tadipatri', capacity: '150 MW', scope: 'Complete Land Grading and test piling, Piling and MMS installation' },
    { client: 'Amplus', endCustomer: 'Amplus', location: 'Anantapur', capacity: '250 MW', scope: 'Construction of civil foundation services, Piling and MMS Installation' }
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__content">
            <span className="page-header__badge">Our Projects</span>
            <h1 className="page-header__title">Solar Project Portfolio</h1>
            <p className="page-header__description">
              Showcasing our expertise in large-scale solar infrastructure development
            </p>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__badge">Active Work</span>
            <h2 className="section-header__title">
              Current <span>Projects</span>
            </h2>
          </div>
          <div className="projects-grid">
            {currentProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-card__image">
                  {project.image && <img src={project.image} alt={project.title} />}
                  <span className="project-card__badge">{project.badge}</span>
                </div>
                <div className="project-card__content">
                  <p className="project-card__client">{project.client}</p>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__location">
                    📍 {project.location}
                  </p>
                  <div className="project-card__scope">
                    <p className="project-card__scope-title">Scope of Work:</p>
                    <div className="project-card__scope-list">
                      {project.scope.slice(0, 4).map((item, idx) => (
                        <span key={idx} className="project-card__scope-item">{item}</span>
                      ))}
                      {project.scope.length > 4 && (
                        <span className="project-card__scope-item">+{project.scope.length - 4} more</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="section section--light">
        <div className="container">
          <div className="section-header">
            <span className="section-header__badge">Track Record</span>
            <h2 className="section-header__title">
              Past <span>Experience</span>
            </h2>
          </div>
          <table className="experience-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Location</th>
                <th>Capacity</th>
                <th>Scope of Work</th>
              </tr>
            </thead>
            <tbody>
              {pastProjects.map((project, index) => (
                <tr key={index}>
                  <td><strong>{project.client}</strong></td>
                  <td>{project.location}</td>
                  <td><span className="capacity-badge">{project.capacity}</span></td>
                  <td>{project.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Projects
