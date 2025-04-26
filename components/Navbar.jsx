import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold text-xl">
              ArtfulWay
            </div>
          </div>
          
          {/* Home navigation item - positioned right next to logo */}
          {/* <div 
            className={`px-3 py-2 rounded-lg text-sm font-medium cursor-pointer ${
              activeSection === "home" ? "text-white" : "text-gray-300 hover:text-white"
            } transition-all duration-200 ml-4`}
            onClick={scrollToTop}
          >
            Home
          </div> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;