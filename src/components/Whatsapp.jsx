import { useState } from "react";
import { FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";

const Whatsapp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "+2347035697549"; // Change this to your actual WhatsApp number

  const sendMessage = () => {
    if (message.trim() === "") return;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    setMessage(""); // Clear the input after sending
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-emerald-600 transition-all"
      >
        {isOpen ? <FaTimes size={24} /> : <FaWhatsapp size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-72 bg-white dark:bg-gray-900 shadow-xl rounded-lg p-4 mt-2 transition-all">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Chat with Us</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">We typically reply within minutes!</p>

          {/* Message Input */}
          <textarea
            className="w-full h-20 p-2 mt-2 border text-black rounded-lg dark:bg-gray-800 dark:text-white"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Send Button */}
          <button
            onClick={sendMessage}
            className="w-full mt-2 flex items-center justify-center bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-all"
          >
            Send <FaPaperPlane className="ml-2" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Whatsapp;
