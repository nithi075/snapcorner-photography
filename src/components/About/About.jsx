import './About.css'

import video1 from '../../assets/about1.mp4'
import video2 from '../../assets/about2.mp4'

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about__container">

        {/* ---- Video Column ---- */}
        <div className="about__images">

          <div className="about__img-primary">
            <video
              className="about__video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video1} type="video/mp4" />
            </video>
          </div>

          <div className="about__img-secondary">
            <video
              className="about__video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video2} type="video/mp4" />
            </video>
          </div>

          <span className="about__frame" aria-hidden="true" />
        </div>

        {/* ---- Text Column ---- */}
        <div className="about__text">

          <span className="section-label">
            Why SnapCorner Photography?
          </span>

          <h2 className="about__heading" id="about-heading">
            Capturing Love, Moments & Memories That Last Forever
          </h2>

          <p className="about__body">
            At SnapCorner Photography, we believe every celebration has a
            beautiful story waiting to be captured. From heartfelt emotions
            and candid smiles to the grand moments of your special day, we
            turn every frame into a timeless memory.
          </p>

          <p className="about__body">
            Based in Vellore, we specialize in wedding photography,
            pre-wedding shoots, and events, creating natural and cinematic
            visuals that let you relive your happiest moments for years to
            come.
          </p>

          <a href="#contact" className="btn about__cta">
            Let's Create Memories
            <span className="about__cta-arrow" aria-hidden="true">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  )
}