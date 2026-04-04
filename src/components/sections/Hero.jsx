import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowDown,
} from "react-icons/fi";
import {
  SITE_INFO,
  SOCIAL_LINKS,
  TYPING_TEXTS,
  RESUME_LINK,
} from "@/utils/constants";
import { smoothScrollTo } from "@/utils/helpers";
import Button from "../common/Button";

const Hero = () => {
  const [typingText, setTypingText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = TYPING_TEXTS[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && typingText === currentText) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typingText === "") {
        // Move to next text
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
      } else {
        // Type or delete character
        setTypingText(
          isDeleting
            ? currentText.substring(0, typingText.length - 1)
            : currentText.substring(0, typingText.length + 1),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typingText, textIndex, isDeleting]);

  const socialIcons = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      url: SOCIAL_LINKS.github,
      label: "GitHub",
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      url: SOCIAL_LINKS.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      url: SOCIAL_LINKS.email,
      label: "Email",
    },
  ];
  const downloadFile = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName; // This forces the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-dark dark:via-dark-light dark:to-dark"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-dots opacity-20" />

      {/* Floating Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-primary dark:text-primary-light font-semibold"
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
            >
              {SITE_INFO.name}
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold h-16"
            >
              <span className="gradient-text">
                {typingText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
            >
              {SITE_INFO.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => smoothScrollTo("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<FiDownload />}
                // onClick={() => window.open(RESUME_LINK, "_blank")}
                onClick={() => downloadFile(RESUME_LINK, "My_Resume.pdf")}
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white dark:bg-dark-light rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />

              {/* Profile Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-dark-light shadow-2xl">
                {/* Placeholder - Replace with your actual image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                  {/* <span className="text-6xl md:text-8xl font-bold gradient-text">
                    {SITE_INFO.name.charAt(0)}
                  </span> */}
                  <img
                    src="public/assets/images/IMG-20251120-WA0001.jpg"
                    alt={SITE_INFO.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Uncomment and add your image */}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => smoothScrollTo("about")}
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <FiArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
