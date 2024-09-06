import { useRef } from "react";
import "./treatments.scss"
import { items, Item } from "./data.ts"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const Treatment = ({ item }: { item: Item }) => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-600, 600]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="img" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="text" style={{ y }}>
            <h2>{item.title} <span>{item.category}</span></h2>
            <h3>{item.price}</h3>
            <p>{item.desc}</p>
            <a href="https://natboringnails.salonized.com/widget_bookings/new">
              <button className="primary">Book Now</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Treatments() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="nailmenu" className="nailmenu" ref={ref}>
      <div className="progress">
        <h1>Nail Menu</h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map((item, idx) => (<Treatment item={item} key={idx} />))}
    </div>
  )
}

export default Treatments