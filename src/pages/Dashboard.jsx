/* eslint-disable no-unused-vars */
import { FaUtensils, FaShoppingCart, FaUsers, FaCalendarAlt } from "react-icons/fa";
import Sidebar from "../component/sidebar";
import Navbar from "../component/Navbar";
import { motion } from "framer-motion";

const Dashboard = () => {
  const stats = [
    { id: 1, icon: <FaShoppingCart />, label: "Total Orders", value: 120, color: "blue" },
    { id: 2, icon: <FaUtensils />, label: "Menu Items", value: 35, color: "green" },
    { id: 3, icon: <FaCalendarAlt />, label: "Reservations Today", value: 18, color: "yellow" },
    { id: 4, icon: <FaUsers />, label: "Total Customers", value: 85, color: "red" },
  ];

  return (
    <div className="flex h-screen bg-linear-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6">
          <h1 className="text-4xl font-extrabold mb-10
            bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-green-500">
            DASHBOARD OVERVIEW
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ scale: 1.08 }}
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

      {/* Enhanced CSS */}
      <style>{`
        .stat-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(14px);
          border-radius: 20px;
          padding: 26px;
          display: flex;
          align-items: center;
          gap: 18px;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
          border: 1px solid rgba(255,255,255,0.3);
        }

        .dark .stat-card {
          background: rgba(31, 41, 55, 0.85);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .stat-card:hover {
          box-shadow: 0 25px 60px rgba(0,0,0,0.3);
        }

        .icon-box {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: white;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        }

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

        .label {
          font-size: 14px;
          font-weight: 500;
          color: #6b7280;
        }

        .dark .label {
          color: #d1d5db;
        }

        .value {
          font-size: 26px;
          font-weight: 800;
          color: #111827;
        }

        .dark .value {
          color: #f9fafb;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
