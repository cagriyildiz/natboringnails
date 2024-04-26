import './about.scss'

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"

const InstagramSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
  )
}

function About() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-600, 600]);

  return (
    <div id="about" className="about">
      <div className="title">
        <h1>About Me</h1>
      </div>
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="img" ref={ref}>
              <img src="/nathal.png" alt="" />
            </div>
            <motion.div className="text" style={{ y }}>
              <h3>About Me</h3>
              <h2>Nathalja Nebbeling</h2>
              <p>
                Hey there, I'm Nathalja, and let me share a bit of my journey with you. Nails have been my passion since I was knee-high! After graduating from Lakwerk Nailschool, I dove straight into the world of nail artistry by joining their team. For a solid 1.5 years, I honed my skills and soaked up every bit of knowledge and experience I could.
                Then came a change of scenery—I spent half a year at Happy Toko, where I continued to refine my craft and explore new techniques. But the call of independence and creativity beckoned, leading me to make the bold move to Haarlem, where I opened up my own salon right in the comfort of my home.
                Here, surrounded by the things I love and the music that fuels my creativity, I've found my true niche. So, step into my world, where years of experience meet boundless creativity. Let's make your nails shine!
              </p>
              <div className="social">
                <div className="item">
                  <a href="https://www.instagram.com/natboringnails">
                    <InstagramSvg />
                    natboringnails
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About