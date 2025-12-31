/* eslint-disable no-unused-vars */
import { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RestaurantInfo from "../Tab/RestaurantInfo";
import ProfileInfo from "../Tab/Profile";
import NotificationsTab from "../Tab/Notifications";
import PaymentTab from "../Tab/Payment";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("restaurant");
  const [editing, setEditing] = useState(false);

  const [restaurantInfo, setRestaurantInfo] = useState({
    name: "MOBEEN RESTAURANT",
    address: "house # M-73",
    contact: "0300-1234567",
  });

  const [profileInfo, setProfileInfo] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    password: "",
  });

  const [notifications, setNotifications] = useState({
    newOrders: true,
    reservations: false,
    lowStock: false,
  });

  const [payment, setPayment] = useState({
    taxRate: 5,
    serviceCharge: 10,
  });

  const handleSave = () => {
    setEditing(false);
    toast.success("Changes saved successfully!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const tabs = [
    { id: "restaurant", label: "RESTAURANT INFO" },
    { id: "profile", label: "PROFILE" },
    {
      id: "notifications",
      label: <FaBell className="text-gray-600 dark:text-gray-300 text-xl hover:text-red-600 transition-colors duration-200" />,
    },
    { id: "payment", label: "PAYMENT" },
  ];

  return (
    <>
      <div className="settings-wrapper">
        <Sidebar />
        <div className="settings-content">
          <Navbar />

          <main className="settings-main">
            <h1 className="settings-title">Settings</h1>

            {/* Tabs */}
            <div className="settings-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Edit Button */}
            <div className="edit-btn-wrap">
              <button onClick={() => setEditing(true)} className="edit-btn">
                Edit
              </button>
            </div>

            {/* Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="settings-card"
            >
              {activeTab === "restaurant" && (
                <RestaurantInfo data={restaurantInfo} setData={setRestaurantInfo} editing={editing} />
              )}
              {activeTab === "profile" && (
                <ProfileInfo data={profileInfo} setData={setProfileInfo} editing={editing} />
              )}
              {activeTab === "notifications" && (
                <NotificationsTab data={notifications} setData={setNotifications} editing={editing} />
              )}
              {activeTab === "payment" && (
                <PaymentTab data={payment} setData={setPayment} editing={editing} />
              )}

              {editing && (
                <div className="save-wrap">
                  <button onClick={handleSave} className="save-btn">
                    Save Changes
                  </button>
                </div>
              )}
            </motion.div>
          </main>
        </div>

        <ToastContainer />
      </div>

      {/* Enhanced CSS */}
      <style>{`
        .settings-wrapper {
          display: flex;
          height: 100vh;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
        }

        .settings-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .settings-main {
          padding: 2rem;
        }

        .settings-title {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 2rem;
          background: linear-gradient(90deg, #2563eb, #16a34a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .settings-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .tab-btn {
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 600;
          background: #e5e7eb;
          color: #374151;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid transparent;
        }

        .tab-btn:hover {
          background: #c7d2fe;
        }

        .tab-btn.active {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .edit-btn-wrap {
          margin-bottom: 16px;
        }

        .edit-btn {
          padding: 10px 24px;
          border-radius: 12px;
          font-weight: 600;
          background: linear-gradient(135deg, #16a34a, #22c55e);
          color: white;
          transition: all 0.3s;
        }

        .edit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(34,197,94,0.4);
        }

        .settings-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
          transition: all 0.3s;
        }

        .settings-card:hover {
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
        }

        .save-wrap {
          margin-top: 24px;
          text-align: right;
        }

        .save-btn {
          padding: 12px 30px;
          border-radius: 16px;
          font-weight: 700;
          background: linear-gradient(135deg, #2563eb, #22c55e);
          color: white;
          transition: all 0.3s;
        }

        .save-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(37,99,235,0.4);
        }

        /* Dark Mode Support */
        .dark .settings-wrapper {
          background: linear-gradient(135deg, #1f2937, #111827);
        }

        .dark .settings-card {
          background: rgba(31, 41, 55, 0.9);
          color: #f9fafb;
        }

        .dark .tab-btn {
          background: #374151;
          color: #d1d5db;
        }

        .dark .tab-btn.active {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
        }

        .dark .edit-btn {
          background: linear-gradient(135deg, #10b981, #22c55e);
        }

        .dark .save-btn {
          background: linear-gradient(135deg, #2563eb, #16a34a);
        }
      `}</style>
    </>
  );
}
