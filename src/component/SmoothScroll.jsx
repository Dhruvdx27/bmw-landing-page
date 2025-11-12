import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1, // Adjust scroll speed (1 = normal, 1.5 = faster)
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    // Refresh on window resize
    const handleResize = () => scroll.update();
    window.addEventListener("resize", handleResize);

    return () => {
      scroll.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="overflow-hidden"
      style={{
        scrollBehavior: "smooth",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
