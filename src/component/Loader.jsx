import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
    const [phase, setPhase] = useState("bmw"); // bmw -> thrill -> video -> hero

    useEffect(() => {
        const sequence = async () => {
            await new Promise((r) => setTimeout(r, 2000)); // BMW text
            setPhase("thrill");
            await new Promise((r) => setTimeout(r, 3000)); // Born to Thrill text
            setPhase("video");
            await new Promise((r) => setTimeout(r, 4000)); // Video phase
            setPhase("hero");
        };
        sequence();
    }, []);

    return (
        <AnimatePresence mode="wait">
            {phase !== "done" && (
                <motion.div
                    key={phase}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1.2 } }}
                    className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden px-4 sm:px-6 md:px-8"
                >
                    {/* OPENING LINE */}
                    {phase === "bmw" && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center justify-center space-y-4 text-center"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.2 }}
                                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide leading-snug sm:leading-normal"
                            >
                                <span className="text-[#0078D6]">BMW</span> — The Ultimate Driving Machine
                            </motion.h1>
                        </motion.div>
                    )}

                    {/* OFFERINGS OF BMW */}
                    {phase === "thrill" && (
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#E6E6E6] uppercase tracking-[0.1em] text-center px-3 leading-tight"
                        >
                            Precision.{" "}
                            <span className="text-red-700 text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold">
                                Power
                            </span>
                            . Perfection.
                        </motion.h1>
                    )}

                    {/* VIDEO */}
                    {phase === "video" && (
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                        >
                                <video
                                    src="/Bmw_intro.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    webkit-playsinline="true"
                                    preload="auto"
                                    className=" w-full sm:w-[100%] md:w-[100%] lg:w-[100%] object-cover brightness-90"
                                    style={{ filter: "contrast(1.2) saturate(1.1)" }}
                                />
                


                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{
                                    opacity: [1],
                                    y: [0],
                                }}
                                transition={{
                                    duration: 4,
                                    delay: 1,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl md:text-5xl lg:text-6xl font-extrabold text-[#0078D6] uppercase tracking-[0.1em] text-center px-4"
                            >
                                Born To Thrill
                            </motion.h1>
                        </motion.div>
                    )}

                    {/*LAST LINE OF INTRO */}
                    {phase === "hero" && (
                        <motion.div
                            key="hero"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="flex flex-col items-center justify-center h-screen text-center px-4 sm:px-6 md:px-8"
                        >
                            {/* Logo */}
                            <motion.img
                                src="/bmw-logo.png"
                                alt="BMW Logo"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                                className="w-16 sm:w-20 md:w-28 lg:w-32 mb-6 drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]"
                            />

                            {/* Heading */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0078D6] mb-4 leading-snug sm:leading-normal">
                                The Future of Performance
                            </h1>

                            {/* Paragraph */}
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl leading-relaxed">
                                Experience precision engineering, innovative design, and unmatched luxury — redefining the road, one drive at a time.
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
