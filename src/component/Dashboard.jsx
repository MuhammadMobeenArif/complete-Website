/* eslint-disable no-unused-vars */
import { FaUtensils, FaShoppingCart, FaUsers, FaCalendarAlt } from "react-icons/fa";
import Sidebar from "../component/sidebar";
import Navbar from "../component/Navbar";
import { motion } from "framer-motion";

const Dashboard = () => {
  const stats = [
    { id: 1, icon: <FaShoppingCart />, label: "TOTAL ORDERS", value: 120, color: "blue" },
    { id: 2, icon: <FaUtensils />, label: "MENU ITEMS", value: 35, color: "green" },
    { id: 3, icon: <FaCalendarAlt />, label: "RESERVATIONS TODAY", value: 18, color: "yellow" },
    { id: 4, icon: <FaUsers />, label: "TOTAL CUSTOMERS", value: 85, color: "red" },
  ];

  return (
    <>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-all duration-300">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />

          <main className="p-6 text-gray-900 dark:text-gray-100">
            <h1 className="text-3xl font-bold mb-8 dashboard-title">
              DASHBOARD OVERVIEW
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.07 }}
                  className={`stat-card stat-${stat.color}`}
                >
                  <div className="icon-box">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="label">{stat.label}</p>
                    <p className="value">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Custom CSS */}
    <style>{`
  /* Dashboard Title */
  .dashboard-title {
    font-size: 2.2rem;
    font-weight: 800;
    background: linear-gradient(90deg, #3b82f6, #22c55e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
  }

  /* Stat Card */
  .stat-card {
    background: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(14px);
    border-radius: 18px;
    padding: 26px;
    display: flex;
    align-items: center;
    gap: 18px;
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(255,255,255,0.3);
    position: relative;
    overflow: hidden;
  }

  .stat-card::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255,255,255,0.25),
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .stat-card:hover::after {
    opacity: 1;
  }

  .stat-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 55px rgba(0, 0, 0, 0.28);
  }

  /* Dark Mode Card */
  .dark .stat-card {
    background: rgba(31, 41, 55, 0.85);
    border: 1px solid rgba(255,255,255,0.08);
  }

  /* Icon Box */
  .icon-box {
    width: 60px;
    height: 60px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: white;
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
    transition: transform 0.4s ease;
  }

  .stat-card:hover .icon-box {
    transform: rotate(-6deg) scale(1.1);
  }

  /* Icon Colors */
  .stat-blue .icon-box {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
  }

  .stat-green .icon-box {
    background: linear-gradient(135deg, #22c55e, #16a34a);
  }

  .stat-yellow .icon-box {
    background: linear-gradient(135deg, #facc15, #eab308);
  }

  .stat-red .icon-box {
    background: linear-gradient(135deg, #ef4444, #dc2626);
  }

  /* Labels */
  .label {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.6px;
    color: #6b7280;
  }

  .dark .label {
    color: #d1d5db;
  }

  /* Values */
  .value {
    font-size: 26px;
    font-weight: 800;
    color: #111827;
  }

  .dark .value {
    color: #f9fafb;
  }
`}</style>
    </>
  );
};

export default Dashboard;
