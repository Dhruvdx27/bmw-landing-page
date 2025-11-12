import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CinematicDivider = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], ["blur(20px)", "blur(0px)", "blur(10px)"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Glow Animation */}
      <motion.div
        style={{ opacity, scale, filter: blur }}
        className="absolute inset-0 bg-gradient-to-b from-[#0078D6]/40 via-[#0A0F12]/80 to-black"
      ></motion.div>

      {/* Animated BMW Tagline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide text-center"
      >
        <span className="text-[#0078D6]">Where Precision</span>{" "}
        <span className="text-gray-300">Meets Emotion</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="text-gray-200 text-center text-sm sm:text-lg mt-6 max-w-[700px] leading-relaxed"
      >
        Every revolution tells a story. Every detail defines performance.  
        The road ahead isn’t just driven — it’s designed.
      </motion.p>

      {/* Subtle Gradient Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "200px" }}
        transition={{ duration: 1, delay: 0.6 }}
        className="h-[2px] bg-gradient-to-r from-transparent via-[#0078D6] to-transparent mt-8"
      ></motion.div>
    </section>
  );
};

export default CinematicDivider;
