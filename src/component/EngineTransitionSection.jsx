import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));

const EngineTransitionSection = () => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;

      const start = winH;
      const end = -rect.height * 0.4;
      const raw = (rect.top - end) / (start - end);
      const p = clamp(1 - raw, 0, 1);
      setProgress(p);
    };

    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const firstOpacity = clamp((0.8 - progress) / 0.3, 0, 1);
  const latestOpacity = clamp((progress - 0.65) / 0.3, 0, 1);

  const firstY = (2 - firstOpacity) * -30;
  const latestY = (2 - latestOpacity) * 30;

  return (
    <section
      ref={ref}
      className="relative w-full mt-40 px-4 py-15 min-h-[180vh] sm:min-h-[170vh] md:min-h-[150vh] flex flex-col items-center justify-start text-white font-[Poppins]"
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        From <span className="text-[#0078D6]">Sky</span> to Street — The{" "}
        <span className="text-red-500">Evolution</span> of Power
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col mt-30 items-center justify-center w-full max-w-[1200px] px-6"
      >
        {/* --- FIRST ENGINE + SPECS --- */}
        <div className="relative mt-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <motion.img
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 2.55, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
            src="/first-engine.png"
            alt="BMW first engine"
            className="w-[95%] sm:w-[70%] md:w-[45%] object-contain drop-shadow-[0_0_60px_#0078D6aa]"
            style={{
              opacity: firstOpacity,
              transform: `translateY(${firstY}px)`,
              willChange: "opacity, transform",
            }}
          />
          <motion.div
            style={{
              opacity: firstOpacity,
              transform: `translateY(${firstY}px)`,
              willChange: "opacity, transform",
            }}
            className="w-full md:w-[45%] bg-gradient-to-b from-[#111]/80 to-[#000]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-gray-200 shadow-[0_0_20px_rgba(0,120,214,0.25)]"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0078D6] mb-4">
              BMW’s First Pulse
            </h2>
            <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-gray-300">
              <li><span className="text-[#0078D6] font-semibold">Type:</span> Straight-six (Inline-6), liquid-cooled aircraft engine</li>
              <li><span className="text-[#0078D6] font-semibold">Displacement:</span> 19.1 liters</li>
              <li><span className="text-[#0078D6] font-semibold">Power Output:</span> 185 HP @ 1,400 rpm</li>
              <li><span className="text-[#0078D6] font-semibold">Compression Ratio:</span> 6.4:1 (very high for its time)</li>
              <li><span className="text-[#0078D6] font-semibold">Cooling System:</span> Water-cooled with dual overhead valves</li>
              <li><span className="text-[#0078D6] font-semibold">Weight:</span> ~240 kg (lightweight for its class)</li>
              <li><span className="text-[#0078D6] font-semibold">Fuel Efficiency:</span> ~0.3 lb/HP/hr (remarkable for 1917 tech)</li>
              <li><span className="text-[#0078D6] font-semibold">Innovation:</span> Altitude carburetor for consistent performance at high altitudes</li>
            </ul>
          </motion.div>
        </div>

        {/* --- LATEST ENGINE + SPECS (Responsive Fix) --- */}
        <div className="relative mt-32 sm:mt-36 md:mt-0 md:absolute md:top-[75%] lg:top-[70%] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-[1200px]">
          <motion.img
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
            src="/new-engine.png"
            alt="BMW latest engine"
            className="w-[95%] sm:w-[70%] md:w-[45%] object-contain drop-shadow-[0_0_60px_#0078D6aa]"
            style={{
              opacity: latestOpacity,
              transform: `translateY(${latestY}px)`,
              willChange: "opacity, transform",
            }}
          />

          <motion.div
            style={{
              opacity: latestOpacity,
              transform: `translateY(${latestY}px)`,
              willChange: "opacity, transform",
            }}
            className="w-full  md:w-[45%] bg-gradient-to-b from-[#111]/80 to-[#000]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-gray-200 shadow-[0_0_25px_rgba(0,120,214,0.3)]"
          >
            <h2 className="text-2xl sm:text-2xl font-bold text-[#0078D6] mb-7">
              BMW’s New Pulse
            </h2>
            <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-gray-300">
              <li><span className="text-[#0078D6] font-semibold">Engine:</span> 4.4L Twin-Turbo V8 Hybrid</li>
              <li><span className="text-[#0078D6] font-semibold">Power Output:</span> 738 HP combined (ICE + Electric)</li>
              <li><span className="text-[#0078D6] font-semibold">Torque:</span> 1,000 Nm (738 lb-ft)</li>
              <li><span className="text-[#0078D6] font-semibold">Performance:</span> 0–100 km/h in 3.4 seconds</li>
              <li><span className="text-[#0078D6] font-semibold">Hybrid System:</span> M TwinPower Turbo + 48V Mild Hybrid Assist</li>
              <li><span className="text-[#0078D6] font-semibold">Top Speed:</span> Electronically limited to 250 km/h (305 km/h unrestricted)</li>
              <li><span className="text-[#0078D6] font-semibold">Efficiency:</span> 20% improved fuel economy via hybrid regen</li>
              <li><span className="text-[#0078D6] font-semibold">Sound Engineering:</span> Adaptive exhaust with variable valves for performance acoustics</li>
              <li><span className="text-[#0078D6] font-semibold">Technology:</span> AI-driven real-time torque vectoring & thermal management</li>
            </ul>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default EngineTransitionSection;
