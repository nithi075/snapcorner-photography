import './Floating.css'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export default function Floating() {
  return (
    <div className="floating-contact">

      {/* Phone */}
      <a
        href="tel:+919080605443"
        className="floating-contact__btn floating-contact__btn--phone"
        aria-label="Call SnapCorner Photography"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919080605443"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact__btn floating-contact__btn--whatsapp"
        aria-label="WhatsApp SnapCorner Photography"
      >
        <FaWhatsapp size={30} />
      </a>

    </div>
  )
}