import { Link } from 'react-router-dom'

function WhyUs() {
  const strengths = [
    {
      title: 'Extensive Experience',
      description: 'Years of proven expertise in renewable energy infrastructure and large-scale solar projects across India.',
      icon: '🏆'
    },
    {
      title: 'Strong Engineering Standards',
      description: 'Rigorous quality control and adherence to the highest engineering standards in every project.',
      icon: '📐'
    },
    {
      title: 'Safety First Approach',
      description: 'Comprehensive safety protocols ensuring zero-harm workplace for all team members and stakeholders.',
      icon: '🛡️'
    },
    {
      title: 'Advanced Machinery',
      description: 'Modern equipment and technology for precision work and efficient project execution.',
      icon: '⚙️'
    },
    {
      title: 'Skilled Workforce',
      description: 'Experienced engineers, skilled operators, and dedicated project managers on every project.',
      icon: '👷'
    },
    {
      title: 'Reliable Execution',
      description: 'On-time delivery with strict quality control and transparent communication throughout.',
      icon: '✅'
    }
  ]

  const stats = [
    { value: '1500+', label: 'MW Capacity Installed' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '10+', label: 'Major Clients' },
    { value: '100%', label: 'Safety Record' }
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__content">
            <span className="page-header__badge">Why Choose Us</span>
            <h1 className="page-header__title">Our Strengths</h1>
            <p className="page-header__description">
              Discover why leading companies trust MAAS & CO for their infrastructure needs
            </p>
          </div>
        </div>
      </section>

      {/* Strengths Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__badge">Our Advantages</span>
            <h2 className="section-header__title">
              What Sets Us <span>Apart</span>
            </h2>
          </div>
          <div className="why-grid">
            {strengths.map((strength, index) => (
              <div key={index} className="why-item">
                <div className="why-item__check">{strength.icon}</div>
                <div className="why-item__content">
                  <h4 className="why-item__title">{strength.title}</h4>
                  <p className="why-item__description">{strength.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <span className="section-header__badge">Our Track Record</span>
            <h2 className="section-header__title">
              Proven <span>Results</span>
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

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta__content">
            <h2 className="cta__title">Ready to Partner With Us?</h2>
            <p className="cta__description">
              Let's discuss how we can support your next project with reliable 
              engineering solutions.
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

export default WhyUs
