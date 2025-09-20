// src/App.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LOGO1NOBG from "./assets/LOGO2BWNOBG.png";
import EMJHAY2 from "./assets/Emjhay2.jpg";
import Comtech from "./assets/comtech.png";
import Tic from "./assets/tic.png";
import Hr4 from "./assets/hr4.jpg";
import CV from "./assets/CV.pdf"; // Import your CV file
import "./index.css";
import {
  Email,
  Phone,
  LocationOn,
  Send,
  Facebook,
  Instagram,
  GitHub,
  Description,
} from "@mui/icons-material";

// Import skill icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";

import ParticlesBackground from "./components/ParticlesBackground";

// Preloader component
const Preloader = ({ setIsLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative w-32 h-32">
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.img
            src={LOGO1NOBG}
            alt="Loading"
            className="w-16 h-16"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
        <motion.div
          className="absolute -bottom-8 left-0 right-0 text-center text-white font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading...
        </motion.div>
      </div>
    </div>
  );
};

// Constants
const ROLES = ["Programmer", "Web Developer", "Front-End Developer"];
const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"];
const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/Emdyeeew/",
    icon: (
      <Facebook className="w-6 h-6 hover:text-blue-500 transition-colors" />
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/emdyew/",
    icon: (
      <Instagram className="w-6 h-6 hover:text-pink-600 transition-colors" />
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/Emjhaaay",
    icon: <GitHub className="w-6 h-6 hover:text-gray-400 transition-colors" />,
  },
];

const SKILLS = [
  {
    name: "HTML",
    level: 90,
    color: "bg-orange-500",
    icon: <SiHtml5 className="w-6 h-6" />,
  },
  {
    name: "CSS",
    level: 85,
    color: "bg-blue-500",
    icon: <SiCss3 className="w-6 h-6" />,
  },
  {
    name: "JavaScript",
    level: 80,
    color: "bg-yellow-500",
    icon: <SiJavascript className="w-6 h-6" />,
  },
  {
    name: "TypeScript",
    level: 70,
    color: "bg-blue-600",
    icon: <SiTypescript className="w-6 h-6" />,
  },
  {
    name: "React",
    level: 80,
    color: "bg-blue-400",
    icon: <SiReact className="w-6 h-6" />,
  },
  {
    name: "Tailwind CSS",
    level: 85,
    color: "bg-cyan-400",
    icon: <SiTailwindcss className="w-6 h-6" />,
  },
  {
    name: "Node.js",
    level: 65,
    color: "bg-green-500",
    icon: <SiNodedotjs className="w-6 h-6" />,
  },
  {
    name: "Git",
    level: 75,
    color: "bg-red-500",
    icon: <SiGit className="w-6 h-6" />,
  },
];

// Update the PROJECTS array to use the imported images
const PROJECTS = [
  {
    title: "ComTech Express E-Commerce UI",
    description:
      "A modern, responsive e-commerce platform for tech gadgets and accessories built with HTML, CSS and Javascript.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    githubUrl: "https://github.com/Emjhaaay/comptechexpress",
    demoUrl: "https://comptechexpress.vercel.app",
    image: Comtech,
  },
  {
    title: "Tic Tac Toe",
    description:
      "A classic game built with pure JavaScript featuring win detection, score tracking, and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    githubUrl: "https://github.com/Emjhaaay/tictactoe",
    demoUrl: "https://tictactoe-six-cyan.vercel.app",
    image: Tic,
  },
  {
    title: "HR4: Hospital Management System – Compensation & Benefits",
    description:
      "A smart hospital HR system focused on Compensation and Benefits, using the MERN Stack with AI and machine learning to forecast overtime, incentives, and employee benefits.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "React Router",
      "AI/ML",
    ],
    githubUrl: "https://github.com/Emjhaaay/HRM4", 
    demoUrl: "https://frontend-hr-4.vercel.app", 
    image: Hr4, 
  },
];

// Animation variants
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  navItem: {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  role: {
    enter: { y: 20, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  },
  skillBar: {
    hidden: { width: 0 },
    visible: (custom) => ({
      width: `${custom}%`,
      transition: { duration: 1.5, delay: 0.3 },
    }),
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  },
  slideUp: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  },
};

// Function to download CV
const downloadCV = () => {
  // Create a temporary anchor element
  window.open(CV, '_blank', 'noopener,noreferrer');
};

// Components
const NavItem = ({ item, variants, className = "" }) => (
  <motion.li variants={variants} className={className}>
    <a
      href={`#${item.toLowerCase()}`}
      className="block px-4 py-2 hover:text-gray-300 transition-colors relative group"
    >
      {item}
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></span>
    </a>
  </motion.li>
);

const SocialIcon = ({ link }) => (
  <motion.a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={link.name}
    whileHover={{ y: -3 }}
    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
  >
    {link.icon}
  </motion.a>
);

const RoleDisplay = ({ currentRoleIndex }) => (
  <motion.div
    className="font-medium text-white inline-block"
    key={currentRoleIndex}
    initial="enter"
    animate="center"
    exit="exit"
    variants={ANIMATION_VARIANTS.role}
    transition={{ duration: 0.5 }}
  >
    {ROLES[currentRoleIndex]}
  </motion.div>
);

const MobileMenu = ({ isOpen }) => (
  <motion.ul
    className={`md:hidden ${
      isOpen ? "block" : "hidden"
    }  top-16 left-0 right-0 bg-gray-900 w-full px-4 py-2 z-50 shadow-lg sticky`}
    initial={{ height: 0, opacity: 0 }}
    animate={
      isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
    }
    transition={{ duration: 0.3 }}
  >
    {NAV_ITEMS.map((item) => (
      <NavItem
        key={item}
        item={item}
        className="py-3 rounded-md hover:bg-gray-800 px-4 transition-colors"
        variants={{ hidden: {}, visible: {} }}
      />
    ))}
  </motion.ul>
);

const DesktopNav = () => (
  <motion.div
    className="hidden md:flex flex-1 justify-center"
    variants={ANIMATION_VARIANTS.container}
    initial="hidden"
    animate="visible"
  >
    <ul className="flex items-center space-x-2">
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item}
          item={item}
          variants={ANIMATION_VARIANTS.navItem}
          className="py-2 md:py-0 rounded-md"
        />
      ))}
    </ul>
  </motion.div>
);

const Header = ({ isOpen, setIsOpen }) => (
  <motion.nav
    className="bg-gray-900/80 text-white sticky top-0 z-50 backdrop-blur-md border-b border-gray-800"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <img src={LOGO1NOBG} alt="Logo" className="h-10 w-auto" />
      </motion.div>

      <DesktopNav />

      <div className="flex items-center gap-4">
        <button
          className="hidden md:block focus:outline-none p-2 rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Search"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        
        {/* Add MobileMenuButton here */}
        <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  </motion.nav>
);

const SocialIcons = () => (
  <motion.div
    className="flex justify-center gap-3 mt-6"
    variants={ANIMATION_VARIANTS.item}
  >
    {SOCIAL_LINKS.map((link) => (
      <SocialIcon key={link.name} link={link} />
    ))}
  </motion.div>
);

const ActionButtons = () => {
  const handleContactMe = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.div
      className="flex gap-4 mt-8 justify-center"
      variants={ANIMATION_VARIANTS.item}
    >
      <motion.button
        className="px-6 py-3 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
        onClick={downloadCV}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Description className="w-5 h-5" />
        Download CV
      </motion.button>
      <motion.button
        className="px-6 py-3 text-sm font-medium border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors flex items-center gap-2"
        onClick={handleContactMe}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Email className="w-5 h-5" />
        Contact Me
      </motion.button>
    </motion.div>
  );
};

const HeroSection = ({ currentRoleIndex }) => (
  <div className="relative mt-32 md:mt-40">
    <div className="absolute inset-0 z-0">
      <ParticlesBackground />
    </div>
    <main className="flex flex-col items-center justify-center h-full px-4 md:px-8 gap-6 max-w-6xl mx-auto text-center relative z-10">
      <motion.div
        className="flex flex-col space-y-3 text-white"
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={ANIMATION_VARIANTS.item}
          className="text-lg md:text-2xl text-gray-300 font-medium"
        >
          Hello, I'm
        </motion.h2>
        <motion.h1
          variants={ANIMATION_VARIANTS.item}
          className="text-5xl md:text-7xl font-bold text-white bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
          Emjhay Dela Cruz
        </motion.h1>
        <motion.div
          variants={ANIMATION_VARIANTS.item}
          className="text-xl md:text-3xl text-gray-300 min-h-[1.5em] flex flex-col sm:flex-row justify-center items-center gap-2 font-medium"
        >
          <h3>I'm a</h3>
          <div className="min-w-[200px] text-center sm:text-left">
            <RoleDisplay currentRoleIndex={currentRoleIndex} />
          </div>
        </motion.div>

        <motion.p
          variants={ANIMATION_VARIANTS.item}
          className="text-gray-400 max-w-2xl mx-auto text-lg mt-4"
        >
          I build exceptional digital experiences with modern web technologies.
        </motion.p>

        <SocialIcons />
        <ActionButtons />
      </motion.div>
    </main>
  </div>
);

const MobileMenuButton = ({ isOpen, setIsOpen }) => (
  <div className="flex items-center md:hidden gap-4">
    <button
      className="focus:outline-none p-2 rounded-full hover:bg-gray-800 transition-colors"
      aria-label="Search"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="focus:outline-none p-2 rounded-full hover:bg-gray-800 transition-colors"
      aria-label="Menu"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        )}
      </svg>
    </button>
  </div>
);

const AboutSection = () => (
  <section
    id="about"
    className="py-20 mt-60 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black"
  >
    <div className="max-w-6xl mx-auto relative z-10 text-white">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
            Me
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto"></div>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="md:w-1/3 flex justify-center">
          <motion.div
            className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-xl border-2 border-gray-700 group"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={EMJHAY2}
              alt="Emjhay Dela Cruz"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h3 className="text-xl font-semibold text-white">
                Emjhay Dela Cruz
              </h3>
            </div>
          </motion.div>
        </div>

        <div className="md:w-2/3 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Who am I?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm Emjhay Dela Cruz, a passionate Front-End Developer with
              expertise in creating dynamic and responsive web applications. I
              graduated with a Bachelor of Science in Information Technology
              from Bestlink College of the Philippines. With a strong foundation
              in modern JavaScript frameworks and a keen eye for design, I
              strive to build intuitive user experiences that are both
              functional and visually appealing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              What I Do?
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I specialize in building modern web applications using
              cutting-edge technologies. My focus is on creating clean,
              efficient code and delightful user interfaces that provide
              seamless experiences across all devices.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Responsive Web Development
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                UI/UX Implementation
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Single Page Applications
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Performance Optimization
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section
    id="skills"
    className="py-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-black to-gray-900"
  >
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
            Skills
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are the technologies I work with and my proficiency level in each
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto mt-4"></div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col h-full">
              {/* Skill Header */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`p-3 rounded-lg ${skill.color} text-white group-hover:scale-110 transition-transform`}
                >
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    {skill.name}
                  </h3>
                  <span className="text-gray-400 text-sm">
                    Proficiency: {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-auto">
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden mb-2">
                  <motion.div
                    className={`h-2 rounded-full ${skill.color}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.skillBar}
                    custom={skill.level}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Basic</span>
                  <span>Advanced</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);



const ProjectsSection = () => (
  <section
    id="projects"
    className="py-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black"
  >
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent projects with links to code and live demos
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto mt-4"></div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GitHub className="w-5 h-5" />
                  GitHub
                </motion.a>
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Emjhay Dela Cruz"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="emjhayd7@gmail.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Hello Emjhay, I would like to talk about..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info and Map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Email className="text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-gray-300 font-medium">Email</h4>
                    <a href="mailto:emjhay@example.com" className="text-gray-400 hover:text-white transition-colors">
                      emjhayd7@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-gray-300 font-medium">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                      0929-585-3429
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <LocationOn className="text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-gray-300 font-medium">Location</h4>
                    <p className="text-gray-400">Caloocan City, Philippines</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-gray-300 font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      whileHover={{ y: -3 }}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123488.72266911203!2d120.94667808609942!3d14.711314984981726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1b519841b5f%3A0x5e770e225042d1a!2sCaloocan%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1751211845092!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="My Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-4 md:px-8 relative overflow-hidden bg-black">
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-4">
            <img src={LOGO1NOBG} alt="Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-white">Emjhay Dela Cruz</span>
          </div>
          <p className="text-gray-400 mt-2 max-w-md">
            Creating beautiful, functional web experiences with modern technologies.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex gap-4 mb-4">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                whileHover={{ y: -3 }}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Emjhay Dela Cruz. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) =>
        prevIndex === ROLES.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      {isLoading ? (
        <Preloader setIsLoading={setIsLoading} />
      ) : (
        <>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          <MobileMenu isOpen={isOpen} />
          <HeroSection currentRoleIndex={currentRoleIndex} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;