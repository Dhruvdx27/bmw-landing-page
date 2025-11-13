import { motion } from "framer-motion";

const categories = [
  {
    name: "SUVs",
    video: "/Bmw-x7.mp4",
    model: "BMW X7 M60i xDrive",
    specs: [
      "4.4L TwinPower Turbo V8 Engine",
      "530 HP | 750 Nm Torque",
      "0–100 km/h: 4.7 sec",
      "Top Speed: 250 km/h",
    ],
  },
  {
    name: "Sedans",
    video: "/Bmw7-series.mp4",
    model: "BMW 7 Series 740i",
    specs: [
      "3.0L TwinPower Turbo Inline-6",
      "381 HP | 520 Nm Torque",
      "0–100 km/h: 5.4 sec",
      "Luxury Lounge Interior",
    ],
  },
  {
    name: "Coupés",
    video: "/Bmw-m4.mp4",
    model: "BMW M4 Competition",
    specs: [
      "3.0L TwinPower Turbo Inline-6",
      "530 HP | 650 Nm Torque",
      "0–100 km/h: 3.5 sec",
      "Adaptive M Suspension",
    ],
  },
  {
    name: "Electric",
    video: "/Bmw-ix.mp4",
    model: "BMW iX xDrive50",
    specs: [
      "Dual Electric Motors (AWD)",
      "516 HP | 765 Nm Torque",
      "Range: 611 km (WLTP)",
      "Charging: 10–80% in 35 min",
    ],
  },
];

const BMWCategories = () => {
  return (
    <section className="w-full flex flex-col font-[Poppins]">
      {categories.map((cat, index) => (
        <motion.div
          key={index}
          initial={{ height: "25vh" }}
          whileHover={{ height: "80vh" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="group relative w-full bg-white text-black overflow-hidden flex flex-col items-center justify-center border-b border-gray-200 cursor-pointer"
        >
          {/* Category Title */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold z-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {cat.name}
          </motion.h2>

          {/* Video Overlay */}
          <motion.video
            src={cat.video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onTouchStart={(e) => e.target.play()}
            className="absolute top-0 left-0 w-full h-full object-cover 
             opacity-70 sm:opacity-0 sm:group-hover:opacity-70 
             transition-opacity duration-700"
          />


          {/* Dark Layer for Contrast */}
          <div className=" absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-70 transition-all duration-700"></div>

          {/* Specs Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
            className="w-full absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0078D6] drop-shadow-lg">
              {cat.model}
            </h3>
            <ul className="space-y-1 text-sm sm:text-base leading-relaxed">
              {cat.specs.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default BMWCategories;
