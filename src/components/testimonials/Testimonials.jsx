import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    body: 'SnapCorner Photography captured every beautiful moment of our wedding so naturally. From the candid photographs to the traditional shots, everything felt genuine and beautifully preserved. We absolutely loved the final memories.',
    couple: 'Happy Couple',
  },
  {
    id: 2,
    body: 'We had a wonderful experience with the SnapCorner team. They were friendly, professional, and made us feel completely comfortable throughout the shoot. The photographs turned out beautiful and exceeded our expectations.',
    couple: 'Wedding Couple',
  },
  {
    id: 3,
    body: 'Our pre-wedding and wedding photographs were captured beautifully. The team understood exactly what we wanted and managed to capture all the little emotions and details that made our day special.',
    couple: 'Happy Couple',
  },
  {
    id: 4,
    body: 'The entire photography experience was smooth and enjoyable. The team was patient, creative, and always ready to capture the perfect frame. Looking through the photos brought back all the emotions of our special day.',
    couple: 'Newlyweds',
  },
  {
    id: 5,
    body: 'From the first conversation to the final delivery, SnapCorner Photography was extremely professional. The candid moments, family photographs, and wedding highlights were captured wonderfully. Highly recommended for couples looking for beautiful memories.',
    couple: 'Wedding Couple',
  },
  {
    id: 6,
    body: 'We loved how naturally the team captured our emotions. Nothing felt forced, and every photograph tells a story. The final collection was elegant, emotional, and exactly what we hoped for.',
    couple: 'Happy Couple',
  },
  {
    id: 7,
    body: 'Our wedding day went by so quickly, but the photographs gave us a way to relive every moment. SnapCorner did an amazing job capturing the smiles, emotions, family moments, and celebrations.',
    couple: 'Newlyweds',
  },
  {
    id: 8,
    body: 'The pre-wedding shoot was such a fun experience with the SnapCorner team. They guided us throughout the session and helped us feel comfortable in front of the camera. The final photographs were absolutely beautiful.',
    couple: 'Engaged Couple',
  },
  {
    id: 9,
    body: 'Professional team, beautiful photography, and great attention to detail. They captured both the big celebrations and the little emotional moments perfectly. We are extremely happy with our memories and would definitely recommend SnapCorner Photography.',
    couple: 'Happy Couple',
  },
]

/* Group into pages of 3 */
const pages = [
  testimonials.slice(0, 3),
  testimonials.slice(3, 6),
  testimonials.slice(6, 9),
]

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState('next')

  const goTo = (index, dir) => {
    setDirection(dir)
    setPage(index)
  }

  const handlePrev = () => {
    goTo(
      (page - 1 + pages.length) % pages.length,
      'prev'
    )
  }

  const handleNext = () => {
    goTo(
      (page + 1) % pages.length,
      'next'
    )
  }

  return (
    <section
      className="testimonials"
      aria-labelledby="testimonials-heading"
    >

      <div className="testimonials__container">

        <span
          className="section-label"
          id="testimonials-heading"
        >
          What Couples Say
        </span>

        <h2 className="testimonials__heading">
          Memories That Speak For Themselves
        </h2>


        <div className="testimonials__row">

          {/* Previous */}
          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--prev"
            onClick={handlePrev}
            aria-label="Previous testimonials"
          >
            ←
          </button>


          {/* Testimonials */}
          <div
            className="testimonials__grid"
            key={page}
            data-direction={direction}
          >

            {pages[page].map((t) => (
              <article
                key={t.id}
                className="testimonial-card"
              >

                <span
                  className="testimonial-card__quote"
                  aria-hidden="true"
                >
                  "
                </span>

                <p className="testimonial-card__body">
                  {t.body}
                </p>

                <footer className="testimonial-card__footer">

                  <p className="testimonial-card__couple">
                    {t.couple}
                  </p>

                </footer>

              </article>
            ))}

          </div>


          {/* Next */}
          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--next"
            onClick={handleNext}
            aria-label="Next testimonials"
          >
            →
          </button>

        </div>


        {/* Page dots */}
        <div
          className="testimonials__dots"
          role="tablist"
          aria-label="Testimonial pages"
        >

          {pages.map((_, i) => (
            <button
              key={i}
              className={`
                testimonials__dot
                ${i === page
                  ? 'testimonials__dot--active'
                  : ''}
              `}
              onClick={() =>
                goTo(
                  i,
                  i > page ? 'next' : 'prev'
                )
              }
              role="tab"
              aria-selected={i === page}
              aria-label={`Testimonials page ${i + 1}`}
            />
          ))}

        </div>

      </div>

    </section>
  )
}