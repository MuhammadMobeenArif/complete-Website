import { FaHome, FaUtensils, FaShoppingCart, FaUsers, FaCalendarAlt, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col shadow-xl transition-colors duration-300">
      
      {/* Logo / Title */}
      <div className="p-6 text-3xl font-extrabold border-b border-gray-700 bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
       RESTAURANT
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 flex flex-col space-y-2">
        
        {[
          { to: "/dashboard", icon: FaHome, label: "DASHBOARD" },
          { to: "/profile", icon: FaUsers, label: "PROFILE" },
          { to: "/orders", icon: FaShoppingCart, label: "ORDERS" },
          { to: "/menu", icon: FaUtensils, label: "MENU" },
          { to: "/reservations", icon: FaCalendarAlt, label: "RESERVATIONS" },
          { to: "/customers", icon: FaUsers, label: "CUSTOMERS" },
          { to: "/setting", icon: FaCog, label: "SETTINGS" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg font-semibold transition-all duration-300 transform ${
                isActive
                  ? "bg-linear-to-r from-green-500 to-blue-500 text-white shadow-lg scale-105"
                  : "text-gray-200 hover:bg-gray-700 hover:shadow-md hover:scale-105"
              }`
            }
          >
            <item.icon className="mr-3 text-lg" /> {item.label}
          </NavLink>
        ))}

      </nav>

      {/* Optional Footer */}
      <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
        © 2025 & 2026 MOBEEN RESTAURANT 
      </div>
    </aside>
  );
};

export default Sidebar;
