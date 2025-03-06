import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiTypescript, SiRedux, SiFirebase, SiMongodb } from "react-icons/si";

const stacks = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-500 text-4xl" /> },
  { name: "Next.js", icon: <TbBrandNextjs className="text-black dark:text-white text-4xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 text-4xl" /> },
  { name: "Tailwind CSS", icon: <TbBrandTailwind className="text-blue-400 text-4xl" /> },
  { name: "React Native", icon: <FaReact className="text-cyan-500 text-4xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-600 dark:text-white text-4xl" /> },
];

const Home = () => {
  const [animateStacks, setAnimateStacks] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setAnimateStacks(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`p-6 lg:p-10 transition-colors duration-300 ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold border-b-4 border-emerald-500 inline-block mb-4">
          About Me
        </h2>
        <p className="text-lg text-justify">
          Experienced Frontend Developer with expertise in JavaScript, React, Redux, Next.js, Nodejs, Express, Python, Django, Django Rest Framework, and other technologies. Passionate about creating engaging web experiences, optimizing performance, and ensuring cross-browser compatibility. Proven track record of delivering high-quality, scalable, and maintainable code. Adaptable in fast-paced environments and dedicated to continuous learning. Effective collaborator with a focus on exceptional user experiences.
        </p>
      </motion.div>

      {/* Stack and Tools Section */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold border-b-4 border-emerald-500 inline-block mb-4">
          Stack and Tools
        </h2>

        {/* Stacks Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={animateStacks ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {stacks.map((stack, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-colors duration-300 ${
                isDarkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {stack.icon}
              <p className="mt-2 font-semibold">{stack.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
