import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0A0F12] text-white font-[Poppins] flex flex-col items-center justify-center px-6 sm:px-12 py-14 border-t border-[#1E293B]/40 overflow-hidden">
      
      {/* Glowing gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0078D6]/10 via-transparent to-transparent blur-3xl opacity-40"></div>

      {/* Content Container */}
      <div className="relative w-full max-w-[1200px] flex flex-col md:flex-row justify-between gap-10 z-10">

        {/* --- Column 1: BMW Brand --- */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/bmw-logo.png" alt="BMW Logo" className="h-12 " />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">BMW</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Driving pleasure since 1916. Innovation, design, and power in motion — redefining luxury for every generation.
          </p>
        </div>

        {/* --- Column 2: Quick Links --- */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-[#0078D6]">Explore</h3>
          <ul className="space-y-2 text-gray-300">
            {["Models", "Electric", "M Series", "Configurator", "Find a Dealer"].map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6, color: "#0078D6" }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer text-sm sm:text-base"
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* --- Column 3: Connect --- */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-[#0078D6]">Connect With Us</h3>
          <div className="flex gap-5">
            {[
              { Icon: Facebook, href: "https://facebook.com/BMW" },
              { Icon: Instagram, href: "https://instagram.com/BMW" },
              { Icon: Twitter, href: "https://twitter.com/BMW" },
              { Icon: Youtube, href: "https://youtube.com/BMW" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                className="text-gray-400 hover:text-[#0078D6] transition-all"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* --- Column 4: Contact --- */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-[#0078D6]">Contact</h3>
          <ul className="text-gray-300 text-sm sm:text-base space-y-2">
            <li>📍 Bhopal, India</li>
            <li>📞 +91 89382 00000</li>
            <li>✉️ support@bmw.com</li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-[#0078D6]/40 to-transparent mt-10"></div>

      {/* Bottom Note */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-500 text-sm text-center mt-6"
      >
        © {new Date().getFullYear()} BMW AG. All Rights Reserved. | Crafted by Dhruv ✦
      </motion.p>
    </footer>
  );
};

export default Footer;
