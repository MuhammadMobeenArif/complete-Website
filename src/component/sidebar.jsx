// import { FaHome, FaUtensils, FaShoppingCart, FaUsers, FaCalendarAlt, FaCog } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col shadow-xl transition-colors duration-300">
      
//       {/* Logo / Title */}
//       <div className="p-6 text-3xl font-extrabold border-b border-gray-700 bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
//        RESTAURANT
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 p-4 flex flex-col space-y-2">
        
//         {[
//           { to: "/dashboard", icon: FaHome, label: "DASHBOARD" },
//           { to: "/profile", icon: FaUsers, label: "PROFILE" },
//           { to: "/orders", icon: FaShoppingCart, label: "ORDERS" },
//           { to: "/menu", icon: FaUtensils, label: "MENU" },
//           { to: "/reservations", icon: FaCalendarAlt, label: "RESERVATIONS" },
//           { to: "/customers", icon: FaUsers, label: "CUSTOMERS" },
//           { to: "/setting", icon: FaCog, label: "SETTINGS" },
//         ].map((item) => (
//           <NavLink
//             key={item.to}
//             to={item.to}
//             className={({ isActive }) =>
//               `flex items-center p-3 rounded-lg font-semibold transition-all duration-300 transform ${
//                 isActive
//                   ? "bg-linear-to-r from-green-500 to-blue-500 text-white shadow-lg scale-105"
//                   : "text-gray-200 hover:bg-gray-700 hover:shadow-md hover:scale-105"
//               }`
//             }
//           >
//             <item.icon className="mr-3 text-lg" /> {item.label}
//           </NavLink>
//         ))}

//       </nav>

//       {/* Optional Footer */}
//       <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
//         © 2025 & 2026 MOBEEN RESTAURANT 
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
import {
  FaHome,
  FaUtensils,
  FaShoppingCart,
  FaUsers,
  FaCalendarAlt,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col shadow-2xl">

      {/* Logo */}
      <div className="p-6 text-3xl font-extrabold tracking-wider border-b border-gray-700">
        <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          RESTAURANT
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 flex flex-col space-y-2">
        {[
          { to: "/dashboard", icon: FaHome, label: "Dashboard" },
          { to: "/profile", icon: FaUsers, label: "Profile" },
          { to: "/orders", icon: FaShoppingCart, label: "Orders" },
          { to: "/menu", icon: FaUtensils, label: "Menu" },
          { to: "/reservations", icon: FaCalendarAlt, label: "Reservations" },
          { to: "/customers", icon: FaUsers, label: "Customers" },
          { to: "/setting", icon: FaCog, label: "Settings" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `group flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                isActive
                  ? "bg-linear-to-r from-green-500 to-blue-500 shadow-lg scale-[1.03]"
                  : "text-gray-300 hover:bg-gray-700/60 hover:text-white"
              }`
            }
          >
            <item.icon className="text-lg group-hover:rotate-6 transition-transform duration-300" />
            <span className="tracking-wide">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 text-center border-t border-gray-700 text-xs text-gray-400">
        © 2025–2026 <br />
        <span className="text-gray-300 font-semibold">MOBEEN RESTAURANT</span>
      </div>
    </aside>
  );
};

export default Sidebar;
