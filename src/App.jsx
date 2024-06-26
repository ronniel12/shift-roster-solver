import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Employees from "./pages/Employees.jsx";
import Shifts from "./pages/Shifts.jsx";
import Contracts from "./pages/Contracts.jsx";
import RosterLength from "./pages/RosterLength.jsx";
import Navbar from "./components/Navbar.jsx";
import Schedule from "./pages/Schedule.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/employees" element={<Employees />} />
        <Route exact path="/shifts" element={<Shifts />} />
        <Route exact path="/contracts" element={<Contracts />} />
        <Route exact path="/roster-length" element={<RosterLength />} />
        <Route exact path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;