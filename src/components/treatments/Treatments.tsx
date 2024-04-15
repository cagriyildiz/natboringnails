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
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <p>{item.desc}</p>
            <button>Book Now</button>
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
    <div id="treatments" className="treatments" ref={ref}>
      <div className="progress">
        <h1>Treatments</h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map((item, idx) => (<Treatment item={item} key={idx} />))}
    </div>
  )
}

export default Treatments