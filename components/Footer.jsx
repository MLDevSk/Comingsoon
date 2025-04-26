import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Social Media Section */}
      <div className="relative z-10 py-16 bg-gradient-to-b from-black/50 to-black/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
            <p className="text-gray-400 mb-8">
              Stay connected and follow us on our social media platforms for updates and exciting content!
            </p>
            <div className="flex justify-center space-x-8">
              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/artfullway/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <FaInstagram className="w-6 h-6 text-purple-300" />
                </div>
                <p className="text-sm text-gray-400">Instagram</p>
              </motion.a>
              {/* LinkedIn */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/company/artfulway/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <FaLinkedin className="w-6 h-6 text-purple-300" />
                </div>
                <p className="text-sm text-gray-400">LinkedIn</p>
              </motion.a>
              {/* YouTube */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.youtube.com/@Artfullways"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <FaYoutube className="w-6 h-6 text-purple-300" />
                </div>
                <p className="text-sm text-gray-400">YouTube</p>
              </motion.a>
              {/* X (Twitter) */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://x.com/artfullway"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/api/placeholder/24/24"
                    alt="X"
                    className="w-6 h-6"
                  />
                </div>
                <p className="text-sm text-gray-400">X</p>
              </motion.a>
            </div>

            {/* Email Address */}
            <div className="mt-12 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-300 mb-2">Contact Us</h4>
              <a
                href="mailto:hello@artfulway.in"
                className="text-purple-400 text-md hover:text-purple-300 transition-colors"
              >
                hello@artfulway.in
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer with Copyright */}
      <div className="relative z-10 py-6 border-t border-white/10">
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ArtfulWay. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;