import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Images from "./Images";

function App() {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
      <motion.div
        ref={carouselRef}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {Images.map((img) => (
          <motion.div className="item" key={img}>
            <img src={img} alt="carousel-img" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default App;
