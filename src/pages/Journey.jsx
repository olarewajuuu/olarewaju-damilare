import { motion } from "framer-motion";

const Journey = () => {
  return (
    <div className="p-6 lg:p-10 transition-colors">
      {/* EMPLOYMENT HISTORY */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold border-b-4 border-emerald-500 inline-block mb-4">
          Employment History
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Frontend Developer & Instructor</h3>
          <p className="text-gray-600 dark:text-gray-400">LANTERN | Dec 2023 – Present</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              Designed and developed <a href="https://lantern.academy/" target="_blank" className="text-emerald-500 hover:underline">Lantern Academy</a>, improving user experience and increasing traffic by 50%.
            </li>
            <li>
              Enhanced mobile accessibility, leading to a 30% increase in mobile traffic.
            </li>
            <li>Provided academic assistance and conducted practice tests to improve student success rates.</li>
            <li>Implemented responsive designs, cross-browser compatibility, and mobile-first development.</li>
            <li>Collaborated with cross-functional teams to meet project requirements.</li>
            <li>Fixed bugs, improving user experience and performance on various websites.</li>
            <li>Created detailed documentation for new and existing features.</li>
            <li>
              Developed new features, enabling media uploads from frontend to backend, increasing site traffic by 30%.
            </li>
          </ul>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            <strong>Technologies used:</strong> JavaScript, jQuery, TypeScript, React, Redux, REST API, Tailwind CSS.
          </p>
        </div>
      </motion.div>

      {/* PROJECTS HIGHLIGHT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10"
      >
        <h2 className="text-3xl font-bold border-b-4 border-emerald-500 inline-block mb-4">
          Projects Highlight
        </h2>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>Lantern</li>
          <li>Lynkkupp Website</li>
          <li>DoctorMe</li>
          <li>ShopFee</li>
          <li>Landing Page</li>
        </ul>
      </motion.div>

      {/* EDUCATION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10"
      >
        <h2 className="text-3xl font-bold border-b-4 border-emerald-500 inline-block mb-4">
          Education
        </h2>
        <div>
          <h3 className="text-xl font-semibold">University of Ibadan, Oyo State</h3>
          <p className="text-gray-600 dark:text-gray-400">Bachelor of Education Chemistry | September 2018</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Journey;
