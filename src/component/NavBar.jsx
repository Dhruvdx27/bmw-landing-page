import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { User, Menu, X } from "lucide-react";

const menuItems = [
  {
    title: "Models",
    megaMenu: true,
    columns: [
      {
        heading: "SUVs",
        items: ["BMW X1", "BMW X3", "BMW X5", "BMW X7"],
      },
      {
        heading: "Sedans",
        items: ["BMW 3 Series", "BMW 5 Series", "BMW 7 Series"],
      },
      {
        heading: "M Division",
        items: ["BMW M2", "BMW M4", "BMW M5"],
      },
      {
        heading: "Electric (BMW i)",
        items: ["BMW iX", "BMW i7", "BMW i4"],
      },
    ],
  },

  {
    title: "Electric",
    megaMenu: true,
    columns: [
      {
        heading: "Electric Lineup",
        items: ["BMW iX", "BMW i7", "BMW i4"],
      },
      {
        heading: "Experience",
        items: ["Compare EVs", "Charging Support", "EV Incentives"],
      },
      {
        heading: "Future",
        items: ["Upcoming EVs", "Battery Tech"],
      },
    ],
  },

  {
    title: "Configurator",
    megaMenu: true,
    columns: [
      {
        heading: "Customize",
        items: ["Exterior", "Interior", "Performance", "Wheels"],
      },
      {
        heading: "Pricing",
        items: ["Finance Options", "On-Road Cost", "Accessories"],
      },
    ],
  },

  {
    title: "Explore",
    megaMenu: true,
    columns: [
      {
        heading: "Discover",
        items: ["BMW Stories", "Motorsport", "Technology"],
      },
      {
        heading: "Events",
        items: ["Launch Events", "Exhibitions", "Experience Drives"],
      },
      {
        heading: "Connect",
        items: ["Dealerships", "Showrooms", "Test Drive"],
      },
    ],
  },
];

const NavBar = () => {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 px-6 sm:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src="/bmw-logo.png" className="h-10 sm:h-12" />
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wider text-white">
            BMW
          </h1>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex gap-10 lg:gap-14 text-white font-medium relative">
          {menuItems.map((menu, i) => (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Main Link */}
              <motion.span
                className="cursor-pointer hover:text-[#0078D6] text-lg"
                whileHover={{ scale: 1.07 }}
              >
                {menu.title}
              </motion.span>

              {/* MegaMenu */}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="
                      absolute left-1/2 -translate-x-1/2 
                      top-full mt-4 w-[85vw] max-w-[1100px]
                      bg-black/80 backdrop-blur-2xl 
                      border border-white/10 shadow-2xl rounded-2xl 
                      p-8 grid grid-cols-2 lg:grid-cols-4 gap-8
                    "
                  >
                    {menu.columns.map((col, ci) => (
                      <div key={ci} className="text-white">
                        <h3 className="text-lg font-semibold text-[#0078D6] mb-3">
                          {col.heading}
                        </h3>
                        <ul className="space-y-2 opacity-90">
                          {col.items.map((item, ii) => (
                            <li
                              key={ii}
                              className="hover:text-[#0078D6] hover:translate-x-1 transition-all cursor-pointer"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* USER ICON + MOBILE MENU ICON */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-white/30 hover:border-[#0078D6] cursor-pointer"
          >
            <User className="text-white w-5 h-5" />
          </motion.div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[70px] left-0 w-full bg-black/90 backdrop-blur-xl text-white p-6 z-[999] md:hidden"
          >
            {menuItems.map((menu, i) => (
              <div key={i} className="mb-6">
                <button
                  className="w-full text-left text-xl font-medium flex justify-between items-center"
                  onClick={() =>
                    setOpenMobileMenu(openMobileMenu === i ? null : i)
                  }
                >
                  {menu.title}
                  <span>{openMobileMenu === i ? "−" : "+"}</span>
                </button>

                {/* Submenus */}
                <AnimatePresence>
                  {openMobileMenu === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-3 ml-3 space-y-4"
                    >
                      {menu.columns.map((col, ci) => (
                        <div key={ci}>
                          <h4 className="text-[#0078D6] font-semibold text-lg mb-1">
                            {col.heading}
                          </h4>
                          <ul className="space-y-1 ml-3 text-gray-300">
                            {col.items.map((item, ii) => (
                              <li key={ii} className="text-sm">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
