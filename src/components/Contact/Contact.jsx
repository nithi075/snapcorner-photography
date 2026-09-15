import './Contact.css'
import contactImg from '../../assets/contact.jpg'

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">

      <div className="contact__hero">

        <div className="contact__hero-img-wrap">
          <img
            src={contactImg}
            alt="SnapCorner Photography Vellore"
            loading="lazy"
            className="contact__hero-img"
          />
        </div>

        <div className="contact__hero-overlay" aria-hidden="true" />

        <div className="contact__hero-content">

          <span className="section-label">
            SnapCorner Photography
          </span>

          <h2 className="contact__heading" id="contact-heading">
            Let's Capture Your Story
          </h2>

          <p className="contact__subtext">
            From Kaadhal to Kalyanam, every emotion deserves to be
            remembered. Let's create beautiful, timeless frames together.
          </p>

          <a
            href="tel:+919080605443"
            className="btn btn-light"
          >
            Call Now
          </a>

        </div>
      </div>

    </section>
  )
}