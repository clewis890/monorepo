import React from 'react'
import { default as NextLink } from 'next/link'

/**
 * Post back button component
 */
const BackButton = () => (
  <div className="back">
    <NextLink href="/">
      <a>Back to blog posts</a>
    </NextLink>
  </div>
)

export default BackButton
