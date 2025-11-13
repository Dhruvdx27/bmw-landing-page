import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./component/Loader";
import LandingPage from "./component/LandingPage";
import SmoothScroll from "./component/SmoothScroll";
import LatestLaunch from "./component/LatestLaunch";
import BMWCategories from "./component/BmwCategories";
import Footer from "./component/Footers";
import CinematicDivider from "./component/CinematicDriver";
import NavBar from "./component/NavBar";



function App() {
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const totalTime = 2000 + 3000 + 4000 + 1500; 
    const timer = setTimeout(() => setShowLanding(true), totalTime);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-[Poppins] overflow-hidden">
      <AnimatePresence mode="wait">
        {!showLanding ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 4 } }}
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <NavBar />
            <LandingPage />
            <LatestLaunch />
            <BMWCategories />
            <CinematicDivider />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
