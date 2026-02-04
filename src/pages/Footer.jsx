import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 Bus Management System. All rights reserved.</p>
      <p>Developed with [❤️] for better bus transportation</p>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms & Conditions</a>
        <a href="contact">Contact Us</a>
      </div>
    </footer>
  )
}

