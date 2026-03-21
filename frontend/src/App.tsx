import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BillCalendar from "./pages/BillCalendar";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/calendar" element={<BillCalendar />} />

        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;