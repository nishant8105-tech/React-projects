import React from 'react'
import logo from "../../assets/Frame 2 1.png"
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className={styles.navbar_ul}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
