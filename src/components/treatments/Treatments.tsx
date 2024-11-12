import { useRef } from "react";
import "./treatments.scss"
import { items } from "./data.ts"
import { motion, useScroll, useSpring } from "framer-motion"
import {Treatment} from "./Treatment.tsx";

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
      {items.map((item, idx) => (
        <Treatment key={idx} item={item} />)
      )}
    </div>
  )
}

export default Treatments