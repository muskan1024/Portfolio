import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from "react-icons/fi";
import useTheme from "@/hooks/useTheme";
import useScroll from "@/hooks/useScroll";
import { NAV_LINKS, RESUME_LINK } from "@/utils/constants";
import { smoothScrollTo } from "@/utils/helpers";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const { isScrolled } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.path.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path) => {
    const sectionId = path.substring(1);
    setIsMenuOpen(false);
    setTimeout(() => {
      smoothScrollTo(sectionId);
    }, 300);
  };

  // const downloadFile = (url, fileName) => {
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = fileName; // This forces the download
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-dark/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-bold cursor-pointer gradient-text"
            onClick={() => handleNavClick("#home")}
          >
            <span className="gradient-text">M.S</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                onClick={() => handleNavClick(link.path)}
                className={`relative font-medium transition-colors duration-300 ${
                  activeSection === link.path.substring(1)
                    ? "text-primary dark:text-primary-light"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
                }`}
              >
                {link.name}
                {activeSection === link.path.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </motion.button>
            ))}

            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-dark-lighter hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <FiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                variant="primary"
                size="sm"
                // icon={<FiDownload />}
                onClick={() =>
                  (window.location.href =
                    // "mailto:shaikhmuskan1024@gmail.com?subject=Hiring Inquiry&body=Hello Muskan,%0D%0A%0D%0AI would like to discuss an opportunity with you.")
                    "mailto:shaikhmuskan1024@gmail.com")
                }
              >
                Hire Me
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-dark-lighter"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <FiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-dark-lighter"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-dark-light border-t border-gray-200 dark:border-gray-700"
          >
            <div className="container-custom py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                    activeSection === link.path.substring(1)
                      ? "bg-primary text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-lighter"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="primary"
                size="sm"
                // icon={<FiDownload />}
                onClick={() =>
                  (window.location.href =
                    // "mailto:shaikhmuskan1024@gmail.com?subject=Hiring Inquiry&body=Hello Muskan,%0D%0A%0D%0AI would like to discuss an opportunity with you.")
                    "mailto:shaikhmuskan1024@gmail.com")
                }
              >
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
