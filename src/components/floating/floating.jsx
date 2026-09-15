import './floating.css'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export default function Floating() {
  return (
    <div className="floating-contact">

      {/* Phone */}
      <a
        href="tel:+60165033804"
        className="floating-contact__btn floating-contact__btn--phone"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/60165033804"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact__btn floating-contact__btn--whatsapp"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp size={30} />
      </a>

    </div>
  )
}
