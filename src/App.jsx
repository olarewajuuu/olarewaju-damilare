import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Whatsapp from "./components/Whatsapp";

function App() {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar - Fixed on Desktop, Full Width on Mobile */}
      <div className="lg:w-72 w-full lg:mt-0 mt-10"> 
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-20"> 
        <Topbar />
        <Whatsapp />
        {/* Page Content with Padding */}
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
