import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const BubbleAnimation = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setPositions([
        {
          x: Math.random() * (window.innerWidth - 200),
          y: Math.random() * (window.innerHeight - 200),
        },
        {
          x: Math.random() * (window.innerWidth - 200),
          y: Math.random() * (window.innerHeight - 200),
        },
        {
          x: Math.random() * (window.innerWidth - 200),
          y: Math.random() * (window.innerHeight - 200),
        },
      ]);
    };

    if (typeof window !== "undefined") {
      handleResize(); // Initial positions

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      {positions.map((pos, index) => (
        <motion.img
          key={index}
          src={`public/img/Banner/banner_shape0${index + 1}.png`}
          alt={`Banner Shape 0${index + 1}`}
          className="w-200px h-200px rounded-lg shadow-lg absolute z-0"
          style={{
            x: pos?.x || 0,
            y: pos?.y || 0,
          }}
          animate={{
            x: pos?.x > window?.innerWidth / 2 ? window.innerWidth - 200 : 0,
            y: pos?.y > window?.innerHeight / 2 ? window.innerHeight - 200 : 0,
          }}
          transition={{
            duration: index === 0 ? 50 : index === 1 ? 30 : 40,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </>
  );
};

export default BubbleAnimation;
