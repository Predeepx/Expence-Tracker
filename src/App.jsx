import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Sidebar/Sidebar.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Transactionpage from "./Pages/Transactionpage";
import About from "./Pages/About.jsx";
import "./App.css";

function App() {
  return (
    <div className="AppLayout">
      <Router basename="/Expence-Tracker">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction" element={<Transactionpage />} />
          <Route path="/about" element={<About />} />
          {/* optional fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
