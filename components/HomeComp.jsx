"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Skills from "./Skills";
import Contact from "./Contact";
import { Oleo_Script } from "next/font/google";
import { Fredoka } from "next/font/google";

const oleo = Oleo_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const fredoka = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function HomeComp() {
  return (
    <div className="Home_layout">
      <div className="img relative overflow-hidden w-full h-[300px] md:h-[400px] lg:h-lvh">
        <Image src="/office.jpg" alt="background" fill />

        <div className="mask absolute w-full h-full top-0 left-0 bg-black/50"></div>

        <div
          className={`info absolute w-full h-full 
          flex flex-col justify-center items-center gap-[10px] text-white/85
        `}
        >
          {/* Animated heading */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`uppercase text-3xl lg:text-5xl font-bold tracking-wide leading-[64px] ${oleo.className}`}
          >
            My Work Case
          </motion.h1>

          {/* Animated paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className={`capitalize text-xl md:text-2xl tracking-wide leading-[30px] text-center px-4 ${fredoka.className}`}
          >
            Selected works showcasing modern UI development and seamless user
            experiences
          </motion.p>

          <a href="#go">
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.3, backgroundColor: "#ffffff22" }}
              whileTap={{ scale: 0.95 }}
              className="border px-6 py-2 mt-2 rounded text-white backdrop-blur-sm hover:backdrop-blur-lg transition-all"
            >
              Browse My Portfolio
            </motion.button>
          </a>
        </div>
      </div>

      {/*----------------------------------- Introduction Section ------------------------------------------------------------*/}
  <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  id="go"
  className="home py-16 bg-gradient-to-b from-white via-gray-100 to-white"
>
  <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
    {/* Text Section */}
    <div className="introduction w-full lg:w-1/2 text-center lg:text-left">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
        Hello, My Name
      </h1>
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-700 mb-4">
        is Mahmoud Elbalhi
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        I am a Front-End Developer specializing in web interface development
        using React.js, with a strong passion for creating smooth and
        interactive user experiences. I graduated from Damietta University –
        Faculty of Computers and Information with a Bachelor’s degree in
        Computer Science. I have skills in HTML, CSS, JavaScript, and React.js,
        along with experience using Tailwind CSS, Material-UI, and other modern
        technologies. I am always eager to enhance my skills and stay updated
        with the latest trends in front-end development, focusing on
        performance, user experience optimization, and designing responsive
        interfaces that adapt to different devices.
      </p>

      <div className="intro_btns mt-6 flex justify-center lg:justify-start">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="https://drive.google.com/file/d/1P-SgDsCUnPD9qNEd4uNNz7L-jIwC5RGE/view?usp=sharing"
          target="_blank"
          className={`inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-6 py-3 
            rounded-full shadow-lg hover:shadow-xl transition duration-300`}
        >
          📄 Download My CV
        </motion.a>
      </div>
    </div>

    {/* Personal Image Section with gradient mask */}
    <div className="personal_pic w-full lg:w-1/2 flex justify-center">
      <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-xl border-4 border-white">
        <Image
          src="/mahmoud.jpg"
          alt="Mahmoud Elbalhi"
          layout="fill"
          objectFit="cover"
        />
        {/* Gradient mask layer on top of the image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/30 via-pink-500/20 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
      </div>
    </div>
  </div>
</motion.div>


      {/* -----------------Skills----------------------- */}
      <Skills />
      <Contact />
    </div>
  );
}
