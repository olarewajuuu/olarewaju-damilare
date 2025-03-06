import { Link } from "react-router-dom";
import { FaUser, FaMap, FaFolderOpen, FaEnvelope } from "react-icons/fa6";
import ThemeSwitcher from "./ThemeSwitcher";

const Topbar = () => {
    return (
        <div className="fixed lg:top-0 lg:right-0 lg:w-auto w-full lg:h-20 shadow-md lg:p-4 p-2 flex flex-row lg:flex-row items-center justify-between top-0 right-0 z-50 transition-colors duration-300 
            bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
            
            {/* Navigation Links */}
            <nav className="flex flex-row items-center lg:space-x-6 space-x-2">
                <Link to="/" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors">
                    <FaUser className="lg:text-xl text-[10px]" />
                    <span className="lg:text-xl text-[16px]">About</span>
                </Link>

                <Link to="/journey" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors">
                    <FaMap className="lg:text-xl text-[10px]" />
                    <span className="lg:text-xl text-[16px]">Journey</span>
                </Link>

                <Link to="/projects" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors">
                    <FaFolderOpen className="lg:text-xl text-[10px]" />
                    <span className="lg:text-xl text-[16px]">Projects</span>
                </Link>

                <Link to="/contact" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors">
                    <FaEnvelope className="lg:text-xl text-[10px]" />
                    <span className="lg:text-xl text-[16px]">Contact</span>
                </Link>
            </nav>

            {/* Theme Switcher Button */}
            <ThemeSwitcher />
        </div>
    );
};

export default Topbar;
