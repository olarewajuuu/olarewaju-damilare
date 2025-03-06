import { useState, useEffect } from "react";
import profileImag from "../assets/image/profile.jpg";
import {
    FaEnvelope,
    FaPhone,
    FaGithub,
    FaXTwitter,
    FaLinkedin,
    FaWhatsapp,
    FaChevronDown,
    FaChevronUp,
    FaLocationDot,
} from "react-icons/fa6";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains("dark")
    );

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
            className={`lg:fixed lg:w-96 lg:h-screen shadow-lg transition-colors duration-300 ${isDarkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-gray-900"
                }`}
        >
            {/* Section 1 (Always Visible) */}
            <div className="p-6 flex flex-col items-center">
                <img
                    src={profileImag}
                    alt="Profile"
                    className="w-30 h-30 lg:w-60 lg:h-60 rounded-full mb-3"
                />
                <h2 className="text-[18px] lg:text-[24px] font-semibold">Olarewaju Damilare T</h2>
                <p className="text-[14px] lg:text-[20px] text-gray-500 dark:text-gray-400">
                    Frontend Developer
                </p>
                <a
                    href="../assets/Frontend Olarewaju Damilare.pdf"
                    download
                    className="mt-2 px-4 py-1 lg:mt-4 lg:px-4 lg:py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                >
                    Download Resume
                </a>

                {/* Mobile Toggle Button */}
                <button
                    className={`mt-4 lg:hidden flex items-center justify-center p-2 rounded-lg transition-colors ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-900"
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaChevronUp className="text-lg" /> : <FaChevronDown className="text-lg" />}
                </button>
            </div>

            {/* Section 2 & 3 - Hidden on Mobile Initially */}
            <div className={`lg:block ${isOpen ? "block" : "hidden"} p-6`}>
                {/* Section 2 - Contact Info */}
                <div className="mt-0 space-y-3 text-[20px]">
                    <div className="flex items-center space-x-2">
                        <FaEnvelope className="text-emerald-400 text-xl" />
                        <p className="transition-colors">damilareolarewaju@yahoo.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaPhone className="text-emerald-400" />
                        <p>+234 703 569 7549</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaLocationDot className="text-emerald-400 text-xl" />
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>

                {/* Section 3 - Social Media */}
                <div className="mt-10 flex justify-center space-x-4">
                    <a href="https://github.com/olarewajuuu" target="_blank" rel="noopener noreferrer">
                        <FaGithub
                            className={`text-2xl transition-colors ${isDarkMode ? "text-white hover:text-emerald-400" : "text-gray-900 hover:text-emerald-500"
                                }`}
                        />
                    </a>
                    <a href="https://x.com/Olarewajuuu?t=6wcJ9EFDLT9YbgVGFM__DQ&s=09
                        " target="_blank" rel="noopener noreferrer">
                        <FaXTwitter
                            className={`text-2xl transition-colors ${isDarkMode ? "text-white hover:text-emerald-400" : "text-gray-900 hover:text-emerald-500"
                                }`}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/olarewaju-damilare-8062671b3
                        " target="_blank" rel="noopener noreferrer">
                        <FaLinkedin
                            className={`text-2xl transition-colors ${isDarkMode ? "text-white hover:text-emerald-400" : "text-gray-900 hover:text-emerald-500"
                                }`}
                        />
                    </a>
                    <a href="https://wa.me/+2347035697549" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp
                            className={`text-2xl transition-colors ${isDarkMode ? "text-white hover:text-emerald-400" : "text-gray-900 hover:text-emerald-500"
                                }`}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
