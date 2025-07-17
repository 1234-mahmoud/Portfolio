'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      className="skills_section py-16 bg-gray-100"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          MySkills
        </motion.h1>
        <div className="my_skills grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {/* React */}
          <motion.div
            className="img_box group w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 hover:scale-110"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="/react.svg"
              alt="React"
              layout="fill"
              objectFit="contain"
              priority
            />
          </motion.div>
          {/* HTML */}
          <motion.div
            className="img_box group w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 hover:scale-110"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/html.svg"
              alt="HTML"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
          {/* CSS */}
          <motion.div
            className="img_box group w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 hover:scale-110"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src="/css3.svg"
              alt="CSS"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
          {/* JavaScript */}
          <motion.div
            className="img_box group w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 hover:scale-110"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/js.svg"
              alt="JavaScript"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
          {/* Bootstrap */}
          <motion.div
            className="img_box group w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 hover:scale-110"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Image
              src="/bootstrap.svg"
              alt="Bootstrap"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
          {/* Tailwind CSS */}
          <motion.div
            className="img_box group w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 hover:scale-110"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image
              src="/tailwind.svg"
              alt="Tailwind CSS"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

           {/* Next js */}
          <motion.div
            className="img_box group w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 hover:scale-110"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/next.svg"
              alt="JavaScript"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
