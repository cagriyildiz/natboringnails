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
          Natboringnails
        </motion.span>
        <div className="menu">
          <a href="#about">About</a>
          <a href="#treatments">Treatments</a>
          <a href="#inspiration">Inspiration</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar