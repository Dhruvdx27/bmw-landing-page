import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { User, PhoneCall } from "lucide-react";
import EngineTransitionSection from "./EngineTransitionSection"; // ✅ Adjust path if needed

const LandingPage = () => {
  const videoRef = useRef(null);
  const buttonRef = useRef(null);

  // Magnetic motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const [visible, setVisible] = useState(false); // “Feel Power” button
  const [showCall, setShowCall] = useState(false); // triggers call button fade-in
  const [callPersistent, setCallPersistent] = useState(false); // keeps it visible forever once shown

  // Mouse tracking for magnetic button
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const videoRect = videoRef.current.getBoundingClientRect();
    const btnRect = buttonRef.current.getBoundingClientRect();

    const dx = e.clientX - (btnRect.left + btnRect.width / 2);
    const dy = e.clientY - (btnRect.top + btnRect.height / 2);

    const inside =
      e.clientX >= videoRect.left &&
      e.clientX <= videoRect.right &&
      e.clientY >= videoRect.top &&
      e.clientY <= videoRect.bottom;

    if (inside) {
      const halfway = videoRect.top + videoRect.height / 2;
      if (e.clientY > halfway) {
        setVisible(true);
        x.set(dx * 0.2);
        y.set(dy * 0.2);
      } else {
        setVisible(false);
        x.set(0);
        y.set(0);
      }
      if (!callPersistent) setShowCall(false);
    } else {
      setVisible(false);
      setShowCall(true);
      setCallPersistent(true); // ✅ ensures button never hides again
      x.set(0);
      y.set(0);
    }
  };

  // Always show the call button on mobile and auto-show after 2.5 s on desktop
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowCall(true);
      setCallPersistent(true);
    } else {
      const timer = setTimeout(() => {
        setShowCall(true);
        setCallPersistent(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-black via-[#0A0F12] to-black text-white font-[Poppins] flex flex-col items-center justify-start relative overflow-hidden">
      {/* ============ NAVBAR ============ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-4 backdrop-blur-md bg-black/20 border-b border-white/10"
      >
        <div className="flex items-center gap-2">
          <img src="/bmw-logo.png" alt="BMW Logo" className="h-10 sm:h-12" />
          <h1 className="text-white text-lg sm:text-xl font-semibold tracking-wider">
            BMW
          </h1>
        </div>

        <ul className="hidden md:flex items-center gap-8 lg:gap-12 text-white font-medium">
          {["Models", "Electric", "Configurator", "Explore"].map((item) => (
            <li
              key={item}
              className="hover:text-[#0078D6] cursor-pointer hover:scale-[1.1] transition duration-150"
            >
              {item}
            </li>
          ))}
        </ul>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 hover:border-[#0078D6] transition-all cursor-pointer"
        >
          <User className="text-white w-5 h-5" />
        </motion.div>
      </motion.nav>

      {/* ============ HERO VIDEO ============ */}
      <div
        ref={videoRef}
        onMouseMove={handleMouseMove}
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] mt-20 overflow-hidden"
      >
        <video
          src="/video-homepage.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-transparent"></div>

        {/* Magnetic “Feel Power” button */}
        <motion.button
          ref={buttonRef}
          style={{ x: springX, y: springY }}
          animate={{
            opacity: visible ? 1 : 0,
            scale: visible ? [0.95, 1.05, 0.95] : 0.8,
            boxShadow: visible
              ? ["0 0 15px #0078D6", "0 0 30px #0078D6", "0 0 15px #0078D6"]
              : "none",
          }}
          transition={{
            opacity: { duration: 0.4, ease: "easeOut" },
            scale: {
              duration: 0.4,
              repeat: visible ? Infinity : 0,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 40px #0078D6" }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-10 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold uppercase border border-[#0078D6] text-[#0078D6] bg-black/40 backdrop-blur-sm hover:bg-[#0078D6] hover:text-white rounded-full transition-all duration-200"
        >
          Feel <span className="text-red-500">Power</span> →
        </motion.button>
      </div>

{/* ======== FLOATING CALL BUTTON (Compact, Ring Animation) ======== */}
<div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex items-center justify-center">
  {/* Ripple Rings */}
  <div className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0078D6]/40 animate-ping-slow"></div>
  <div className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0078D6]/20 animate-ping-slower"></div>

  {/* Tooltip */}
  <motion.div
    initial={{ opacity: 0, x: 10, scale: 0.95 }}
    whileHover={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="hidden sm:block absolute right-[115%] bg-gradient-to-r from-[#ffffffdd] to-[#e6e6e6cc]
               text-[#0A0F12] text-xs font-semibold tracking-wide
               px-3 py-1.5 rounded-lg shadow-[0_0_10px_rgba(0,120,214,0.35)]
               backdrop-blur-md border border-[#0078D6]/30"
  >
    <span className="inline-flex items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#0078D6"
        className="w-3.5 h-3.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h8m0 0l-3-3m3 3l-3 3"
        />
      </svg>
      Book a Test Drive
    </span>
  </motion.div>

  {/* Call Button */}
  <motion.a
    href="tel:+911800123456"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    animate={{
      scale: [1, 1.08, 1],
      boxShadow: [
        "0 0 10px #0078D6aa",
        "0 0 25px #0078D6ff",
        "0 0 10px #0078D6aa",
      ],
    }}
    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-9 h-9 sm:w-11 sm:h-11 bg-[#0078D6] rounded-full flex items-center justify-center
               shadow-[0_0_25px_#0078D6aa] cursor-pointer hover:shadow-[0_0_40px_#0078D6ff] transition-all"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="white"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 5.5C2 4.11929 3.11929 3 4.5 3H6a1 1 0 011 .883l.25 2A1 1 0 016.25 7h-.5A1.75 1.75 0 004 8.75v.5a11 11 0 0011 11h.5A1.75 1.75 0 0017.25 18v-.5a1 1 0 01.883-.992l2-.25A1 1 0 0121 17v1.5A2.5 2.5 0 0118.5 21h-1A15.5 15.5 0 012 5.5z"
      />
    </svg>
  </motion.a>
</div>



      {/* ============ ENGINE TRANSITION SECTION ============ */}
      <EngineTransitionSection />
    </div>
  );
};

export default LandingPage;
