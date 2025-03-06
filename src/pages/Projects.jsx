import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import lanternImg from "../assets/image/lantern.png";
import lynkuppmg from "../assets/image/lyykuppp.png";
import doctormeImg from "../assets/image/doctorme.png";
import shoefeetImg from "../assets/image/shoefeet.png";
import landinpageImg from "../assets/image/Landing pag.png";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Lantern Academy",
    description: "I developed Lantern Academy, an innovative Madrassah located in Central Rochdale, UK. The website showcases the academy's commitment to high-quality education and character development, offering a rich variety of resources aimed at nurturing the next generation. The platform provides information on admissions, facilities, staff, and the academy's mission to create ambassadors of the Beloved Prophet ﷺ in today's society. This project demonstrates my ability to create informative and user-friendly educational websites that effectively communicate an institution's values and offerings.",
    technologies: ["React", "Tailwind CSS", "Redux", "Firebase"],
    image: lanternImg,
    github: "https://github.com/olarewajuuu/Lantern",
    live: "https://lantern.academy/",
  },
  {
    id: 2,
    title: "Lynkkupp Website",
    description: "I developed LynkKupp, a professional networking platform designed to connect individuals and businesses. The website features a user-friendly interface that allows users to create profiles, showcase their skills, and connect with others in their industry. Key functionalities include a customizable dashboard, messaging system, and job board integration, enabling users to explore career opportunities and collaborate effectively. This project demonstrates my ability to create comprehensive networking solutions that foster professional growth and community engagement.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    image: lynkuppmg,
    github: "https://github.com/olarewajuuu/lynkkupp_website",
    live: "https://lynkkupp-website.vercel.app/",
  },
  {
    id: 3,
    title: "DoctorMe",
    description: "I developed DoctorMe, a comprehensive health platform designed to empower users with accessible medical information and services. The website features an AI-powered symptom checker, allowing users to input their symptoms and receive potential diagnoses and recommendations. Additionally, it offers a rich library of health articles authored by experienced healthcare professionals, covering topics from common ailments to preventive care. Users can also connect with local health workers through the platform, facilitating easy appointment bookings with qualified providers in their community. This project demonstrates my ability to integrate advanced technologies and user-centric design to enhance healthcare accessibility..",
    technologies: ["JavaSrcipt", "Tailwind"],
    image: doctormeImg,
    github: "https://github.com/olarewajuuu/doctorme",
    live: "https://doctorme.vercel.app/",
  },
  {
    id: 4,
    title: "ShopFee",
    description: "I developed Shopfeet, a modern and responsive e-commerce platform specializing in footwear. The site features a clean and intuitive design, offering seamless navigation through sections such as Home, About, Categories, and Contact Us. Users can explore product categories for men and women, browse top picks, and stay updated on new releases. The platform also includes a newsletter registration to keep customers informed about the latest products. This project highlights my ability to create user-friendly and visually appealing e-commerce solutions tailored to the footwear industry.",
    technologies: ["React.js", "Tailwind CSS"],
    image: shoefeetImg,
    github: "https://github.com/olarewajuuu/Shopfeet",
    live: "https://shopfeet.vercel.app/",
  },
  {
    id: 5,
    title: "Landing Page",
    description: "I developed a modern and responsive Human Resource landing page using Next.js and Tailwind CSS. The design features a clean layout with a cohesive color palette of blue, white, and slate, ensuring a fresh and professional appearance. Key sections include a Navbar for seamless navigation, a Hero Section that captures attention, an 'About Us' section detailing the organization's mission and vision, a Services section outlining core offerings, and a Footer with essential contact information. This project showcases my ability to create engaging and user-friendly web pages tailored to specific business needs.",
    technologies: ["React", "CSS", "JavaScript", "Tailwind"],
    image: landinpageImg,
    github: "https://github.com/olarewajuuu/HumanResourceLandingPage",
    live: "https://human-resource-landing-page-tan.vercel.app/",
  },
];

const Projects = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  const [expandedProject, setExpandedProject] = useState(null);

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
      className={`p-6 lg:p-10 rounded-lg shadow-lg transition-colors ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Page Heading */}
      <motion.h2
        className="text-3xl font-bold border-b-4 border-emerald-500 inline-block mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Recent Projects
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`p-4 rounded-lg shadow-lg transition-colors ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />

            {/* Dropdown Icon (Only for Mobile) */}
            <div className="md:hidden flex justify-center mt-2">
              <button
                onClick={() =>
                  setExpandedProject(expandedProject === project.id ? null : project.id)
                }
                className="bg-gray-700 dark:bg-gray-500 text-white py-2 px-10 rounded-t-[8px]"
              >
                {expandedProject === project.id ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            {/* Desktop Version: Show Everything by Default */}
            <div className="hidden md:block">
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="mt-2 text-sm">{project.description}</p>

              {/* Technologies Used */}
              <p className="text-sm font-semibold mt-3">
                <span className="text-emerald-500">Tech Stack:</span>{" "}
                {project.technologies.join(", ")}
              </p>

              {/* Project Links */}
              <div className="flex items-center justify-start mt-4 space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500"
                >
                  <FaExternalLinkAlt className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Mobile: Expandable Details */}
            {expandedProject === project.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm">{project.description}</p>

                {/* Technologies Used */}
                <p className="text-sm font-semibold mt-3">
                  <span className="text-emerald-500">Tech Stack:</span>{" "}
                  {project.technologies.join(", ")}
                </p>

                {/* Project Links */}
                <div className="flex items-center justify-start mt-4 space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-500"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-500"
                  >
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
