import React from 'react'
import { useSiteMetadata } from "../hooks/use-site-metadata"
import footerSTyles from '../styles/footer.module.scss'

const Footer = () => {
  const { author } = useSiteMetadata()

  return (
    <footer className={footerSTyles.footer}>
      <p>Created by {author} &copy; 2019</p>
    </footer>
  )
}

export default Footer
