import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/", icon: "🏠" },
  { label: "About", path: "/about", icon: "ℹ️" },
  { label: "Contact", path: "/contact", icon: "📞" },
  { label: "Dashboard", path: "/dashboard", icon: "📋" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar-title">Navigation</p>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}