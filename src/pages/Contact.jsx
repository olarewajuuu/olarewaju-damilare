import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
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

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("Sending...");

    const formEndpoint = "https://formspree.io/f/xjkybwgj";

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("Error occurred. Try again.");
    }
  };

  return (
    <motion.div
      className={`p-6 lg:p-10 rounded-lg shadow-lg transition-colors ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Page Heading */}
      <motion.h2
        className="text-3xl font-bold border-b-4 border-emerald-500 inline-block mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Details
      </motion.h2>

      {/* Contact Details Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {[
          { id: 1, icon: FaEnvelope, title: "Email", value: "damilareolarewaju@yahoo.com", link: "mailto:damilareolarewaju@yahoo.com", btnText: "Send a Mail", bgColor: "bg-emerald-500" },
          { id: 2, icon: FaWhatsapp, title: "WhatsApp", value: "+2347035697549", link: "https://wa.me/+2347035697549", btnText: "Send a WhatsApp", bgColor: "bg-emerald-500" },
          { id: 3, icon: FaPhone, title: "Phone", value: "+2347035697549", link: "tel:+2347035697549", btnText: "Place a Call", bgColor: "bg-emerald-500" },
          { id: 4, icon: FaMapMarkerAlt, title: "Location", value: "Lagos, Nigeria", link: "#", btnText: "", bgColor: "bg-emerald-500" },
        ].map((item) => (
          <motion.div
            key={item.id}
            className={`p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-colors ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              }`}
            whileHover={{ scale: 1.05 }}
          >
            <item.icon className={`text-4xl ${item.bgColor} text-white p-2 rounded-full mb-2`} />
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="text-gray-700 dark:text-gray-300">{item.value}</p>
            {item.btnText && (
              <a href={item.link} className={`mt-3 ${item.bgColor} text-white px-4 py-2 rounded-lg flex items-center space-x-2`}>
                <FaPaperPlane /> <span>{item.btnText}</span>
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Form Section */}
      <motion.h2
        className="text-3xl font-bold border-b-4 border-emerald-500 inline-block mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Contact Form
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className={`p-6 rounded-lg shadow-lg transition-colors ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="w-full md:w-1/2 mb-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:text-white"
              placeholder="Full Name"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          <div className="w-full md:w-1/2 mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:text-white"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>


        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:text-white"
            placeholder="Message"
            rows="4"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <motion.button
          type="submit"
          className=" bg-emerald-500 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FaPaperPlane /> <span>Send Message</span>
        </motion.button>

        {status && <p className="text-sm mt-2 text-center text-gray-500">{status}</p>}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
