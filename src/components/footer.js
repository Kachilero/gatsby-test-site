import React from 'react'
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Footer = () => {
  const { author } = useSiteMetadata()

  return (
    <footer>
      <p>Created by {author} &copy; 2019</p>
    </footer>
  )
}

export default Footer
