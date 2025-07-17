import { BsWhatsapp, BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-white py-16 text-center"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact Me
      </motion.h1>
      <div className="flex justify-center gap-6 flex-wrap">
        {/* GitHub */}
        <motion.div
          className="transform transition-transform duration-300 hover:scale-130"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            target="_blank"
            href="https://github.com/1234-mahmoud"
            rel="noopener noreferrer"
            className="text-black text-3xl p-4 rounded-full"
          >
            <BsGithub />
          </a>
        </motion.div>
        {/* LinkedIn */}
        <motion.div
          className="transform transition-transform duration-300 hover:scale-130"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mahmoud-elbalhi/"
            rel="noopener noreferrer"
            className="text-blue-700 text-3xl p-4 rounded-full"
          >
            <GrLinkedinOption />
          </a>
        </motion.div>
        {/* WhatsApp */}
        <motion.div
          className="transform transition-transform duration-300 hover:scale-130"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            target="_blank"
            href="https://wa.me/+201064218085"
            rel="noopener noreferrer"
            className="text-green-600 text-3xl p-4 rounded-full"
          >
            <BsWhatsapp />
          </a>
        </motion.div>
        {/* Gmail */}
        <motion.div
          className="transform transition-transform duration-300 hover:scale-130"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            target="_blank"
            href="mailto:mahmoud01234elbalhi@gmail.com?subject=Hello&body=I%20wanted%20to%20get%20in%20touch%20with%20you."
            rel="noopener noreferrer"
            className="text-red-600 text-3xl p-4 rounded-full"
          >
            <SiGmail />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
