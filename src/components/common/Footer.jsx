import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
  FiHeart,
} from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SOCIAL_LINKS, SITE_INFO, NAV_LINKS } from "@/utils/constants";
import { smoothScrollTo } from "@/utils/helpers";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: <FiGithub className="w-5 h-5" />,
    linkedin: <FiLinkedin className="w-5 h-5" />,
    email: <FiMail className="w-5 h-5" />,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-5" />

      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              {SITE_INFO.name}
            </h3>
            <p className="text-gray-400">{SITE_INFO.tagline}</p>
            <p className="text-sm text-gray-500">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => smoothScrollTo(link.path.substring(1))}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg bg-dark-lighter hover:bg-primary transition-colors duration-300"
                  aria-label={platform}
                >
                  {socialIcons[platform]}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} {SITE_INFO.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              Built with React, TailwindCSS &{" "}
              <FiHeart className="text-red-500" />
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300 z-40"
        aria-label="Back to top"
      >
        <FiArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
