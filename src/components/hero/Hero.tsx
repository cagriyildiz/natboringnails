import './hero.scss'
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

function Hero() {

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="text" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Natboringnails</motion.h2>
          <motion.h1 variants={textVariants}>Nail Art Studio</motion.h1>
          <motion.div className="action" variants={textVariants}>
            <a href="https://natboringnails.salonized.com/widget_bookings/new">
              <button className="primary">Book Now</button>
            </a>
            <a href="#contact"><button>Contact Me</button></a>
          </motion.div>
          <a href="#treatments">
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="Scroll Down" />
          </a>
        </motion.div>
      </div>
      
    </div>
  )
}

export default Hero