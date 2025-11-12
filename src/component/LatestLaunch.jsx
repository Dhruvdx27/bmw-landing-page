import { motion } from "framer-motion";

const LatestLaunch = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#0A0F12] via-black to-[#0A0F12] text-white py-24 px-6 sm:px-10 flex flex-col items-center font-[Poppins]">
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-5xl md:text-6xl font-bold text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        BMW’s Latest <span className="text-[#0078D6]">Revolution</span>
      </motion.h1>

      {/* Car Showcase */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12 max-w-[1200px] w-full">
        {/* Left: Car Image / Video */}
        <motion.div
          initial={{ opacity: 0, x: -160 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="relative w-full md:w-[50%] flex items-center justify-center"
        >
          <video
            src="/latest-launch.mp4" // 🔄 Replace with your car video or image
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="rounded-2xl w-full h-full object-cover shadow-[0_0_40px_rgba(0,120,214,0.4)]"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent"></div>
        </motion.div>

        {/* Right: Specs */}
        <motion.div
          initial={{ opacity: 0, x: 160 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="w-full md:w-[45%] bg-gradient-to-b from-[#111]/80 to-[#000]/90 backdrop-blur-md rounded-2xl p-8 text-gray-200 shadow-[0_0_25px_rgba(0,120,214,0.3)]"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0078D6] mb-6">
            2025 BMW i7 M70 xDrive
          </h2>
          <ul className="space-y-3 text-sm sm:text-base leading-relaxed text-gray-300">
            <li>
              <span className="text-[#0078D6] font-semibold">Motor:</span>{" "}
              Dual Electric Motors (AWD)
            </li>
            <li>
              <span className="text-[#0078D6] font-semibold">Power Output:</span>{" "}
              650 HP (485 kW)
            </li>
            <li>
              <span className="text-[#0078D6] font-semibold">Torque:</span> 1,100 Nm
            </li>
            <li>
              <span className="text-[#0078D6] font-semibold">0–100 km/h:</span> 3.7 sec
            </li>
            <li>
              <span className="text-[#0078D6] font-semibold">Range:</span> 560 km (WLTP)
            </li>
            <li>
              <span className="text-[#0078D6] font-semibold">Battery:</span> 101.7 kWh
            </li>
            <li>
              <span className="text-[#0078D6] font-semibold">Charging:</span> 195 kW Fast Charging (10–80% in 34 min)
            </li>
            <li>
              <span className="text-[#0078D6] font-semibold">Interior:</span>{" "}
              Theatre Screen, Bowers & Wilkins 39-Speaker Audio
            </li>
            <li>
              <span className="text-[#0078D6] font-semibold">Price:</span> ₹2.50 Cr (Ex-Showroom India)
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestLaunch;
