import React from 'react'
import { footerStyles } from 'styles'

/**
 * Site footer component
 */
const Footer = () => (
  <footer>
    <p>
      DAB Blog created with &nbsp;
      <a
        href="https://prismic.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prismic
      </a>
      <br />
      <a
        href="https://prismic.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="footer-logo"
          src="/images/logo-prismic.svg"
          alt="Prismic logo"
        />
      </a>
    </p>
    <style jsx global>{footerStyles}</style>
  </footer>
)

export default Footer
