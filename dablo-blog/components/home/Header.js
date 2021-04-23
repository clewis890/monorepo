import React from 'react'
import { RichText } from 'prismic-reactjs'
import { headerStyles } from 'styles'

/**
 * Homepage header component
 */
const Header = ({ image, headline, description }) => {
  return (
    <div className="home">
      <div className="blog-avatar" style={{ backgroundImage: `url(${image.url})` }} />
      <h1 className="blog-title">{RichText.asText(headline)}</h1>
      <div className="blog-description">
      <details className="blog-details" style={{ color: '#9a9a9a', cursor: 'pointer' }}>
            <summary className="blog-drop" style={{  margin: '40px auto' }}>
              More about the author
            </summary>
            {RichText.asText(description)}
      </details>
      </div>
      {/* <p className="blog-description">{RichText.asText(description)}</p> */}
      <style jsx global>{headerStyles}</style>
    </div>
  )
}

export default Header
