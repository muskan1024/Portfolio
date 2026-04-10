import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { CONTACT_INFO } from "@/utils/constants";
import ContactForm from "../ui/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.a
                href={`mailto:${CONTACT_INFO.email}`}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark-light rounded-lg hover:bg-gray-100 dark:hover:bg-dark-lighter transition-colors group"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white break-all">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark-light rounded-lg"
              >
                <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {CONTACT_INFO.location}
                  </p>
                </div>
              </motion.div>

              {/* {CONTACT_INFO.phone && (
                <motion.a
                  href={`tel:${CONTACT_INFO.phone}`}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark-light rounded-lg hover:bg-gray-100 dark:hover:bg-dark-lighter transition-colors group"
                >
                  <div className="p-3 bg-accent/10 text-accent rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{CONTACT_INFO.phone}</p>
                  </div>
                </motion.a>
              )} */}
            </div>

            {/* Availability Status */}
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-green-700 dark:text-green-400">
                  {CONTACT_INFO.availability}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-dark-light p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
