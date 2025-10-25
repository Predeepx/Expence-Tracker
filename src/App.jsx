import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Sidebar/Navbar.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Transactionpage from "./Pages/Transactionpage";
import About from "./Pages/About.jsx";
import "./App.css";

function App() {
  return (
    <div className="AppLayout">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transaction" element={<Transactionpage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App ;
