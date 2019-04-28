import React from 'react'
import { Link } from "gatsby"

/** Styles import with CSS modules, we need to import the individual stylesheets
 * Like they are a JS module
*/
import headerStyles from "../styles/header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1><Link to="/" className={headerStyles.logo}>Gatsby Bootcamp</Link></h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link to="/blog" className={headerStyles.link} activeClassName={headerStyles.activeLink}>Blog</Link></li>
          <li><Link to="/about" className={headerStyles.link} activeClassName={headerStyles.activeLink}>About</Link></li>
          <li><Link to="/contact" className={headerStyles.link} activeClassName={headerStyles.activeLink}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
