import './navbar.scss'
import { motion } from 'framer-motion'

function Navbar() {

  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="logo">
            <img src="/logo-white.png" alt="natboringnails logo" />
          </div>
        </motion.span>
        <div className="menu">
          <a href="#nailmenu">Nail Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar