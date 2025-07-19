"use client";

import data from "../data/data";
import Contact from "./Contact";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      className="projects py-16 bg-gray-50"
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="proj_cont container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Projects
        </motion.h1>
        <span
          className={`flex justify-center items-center gap-[10px] my-[15px] text-gray-700 font-bold text-xl `}
        >
          projects number:{" "}
          <span
            className={`flex justify-center items-center text-white 
              w-[40px] h-[40px] rounded-full bg-gray-700`}
          >
            {data.length}
          </span>
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((project, idx) => (
            <motion.div
              key={idx}
              className="card bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 group overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="card_pic h-48 w-full overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
              <div className="card_data p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="proj_links flex gap-4 mb-3">
                  <a
                    href={project.sourseCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                  >
                    Source Code
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                  >
                    Live Demo
                  </a>
                </div>
                <span className="block text-center text-xs text-gray-400">
                  Touch the card
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div className="mt-20">
        <Contact />
      </motion.div>
    </motion.div>
  );
}
