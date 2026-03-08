import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import StudentDetails from "./pages/StudentDetails";
import "./styles/App.css";

export default function App() {
  return (
    <div className="app-wrapper">

      <Header title="Student Management Portal" />

      <nav className="top-nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Contact
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Dashboard
        </NavLink>
      </nav>

      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/"            element={<Home />}           />
            <Route path="/about"       element={<About />}          />
            <Route path="/contact"     element={<Contact />}        />
            <Route path="/dashboard"   element={<Dashboard />}      />
            <Route path="/student/:id" element={<StudentDetails />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}