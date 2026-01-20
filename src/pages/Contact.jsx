import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Office Address',
      value: 'Flat No J2-309, VGN Stafford, Thirumullaivoyul, Chennai – 600062'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+91 93635 26497',
      isLink: true,
      href: 'tel:+919363526497'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'maasgeotech24@gmail.com',
      isLink: true,
      href: 'mailto:maasgeotech24@gmail.com'
    },
    {
      icon: '👤',
      title: 'Contact Person',
      value: 'Naveen Kumar'
    }
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__content">
            <span className="page-header__badge">Contact Us</span>
            <h1 className="page-header__title">Get in Touch</h1>
            <p className="page-header__description">
              Have a project in mind? Let's discuss how we can help you build strong foundations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section--dark">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form">
              <h3 style={{ marginBottom: 'var(--space-6)', color: 'var(--color-primary-900)' }}>
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-input"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn--primary btn--large" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-info-card__icon">{info.icon}</div>
                  <div className="contact-info-card__content">
                    <p className="contact-info-card__title">{info.title}</p>
                    {info.isLink ? (
                      <a href={info.href} className="contact-info-card__value">
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-info-card__value">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Secondary Email */}
              <div className="contact-info-card">
                <div className="contact-info-card__icon">📧</div>
                <div className="contact-info-card__content">
                  <p className="contact-info-card__title">Alternative Email</p>
                  <a href="mailto:prlenterprises2020@gmail.com" className="contact-info-card__value">
                    prlenterprises2020@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
