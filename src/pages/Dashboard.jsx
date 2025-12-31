/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaShoppingBag, FaDollarSign, FaUsers, FaHamburger } from "react-icons/fa";
import Sidebar from "../component/sidebar";
import Navbar from "../component/Navbar";
import { motion } from "framer-motion";

const stats = [
  { title: "TOTAL ORDERS", value: "19,245", icon: FaShoppingBag, color: "from-orange-500 to-red-500" },
  { title: "RESERVATIONS", value: "$18,540", icon: FaDollarSign, color: "from-green-500 to-emerald-500" },
  { title: "CUSTOMERS", value: "820", icon: FaUsers, color: "from-blue-500 to-cyan-600" },
  { title: "MENU ITEMS", value: "59", icon: FaHamburger, color: "from-yellow-400 to-orange-500" },
];

const initialOrders = [
  { id: "#1001", item: "Pizza-Deal-1", status: "Completed", price: "$500" },
  { id: "#1002", item: "Chocolate Rasmalai", status: "Pending", price: "$950" },
  { id: "#1003", item: "Chicken Roll", status: "Completed", price: "$350" },
  { id: "#1004", item: "Chicken Fried", status: "Pending", price: "$300" },
  { id: "#1005", item: "Tasti Pizza", status: "Completed", price: "$1150" },
  { id: "#1006", item: "Pizza-Max", status: "Pending", price: "$1100" },
];

const Dashboard = () => {
  const [orders, setOrders] = useState(initialOrders);

  // Edit Order
  const handleEdit = (orderId) => {
    const order = orders.find(o => o.id === orderId);
    const newItem = prompt("Edit item name:", order.item);
    if (newItem) {
      setOrders(orders.map(o => o.id === orderId ? { ...o, item: newItem } : o));
    }
  };

  // Delete Order
  const handleDelete = (orderId) => {
    if (confirm("Are you sure you want to delete this order?")) {
      setOrders(orders.filter(o => o.id !== orderId));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-400">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />

        <div className="p-6">

          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            🍔 FAST FOOD DASHBOARD
          </motion.h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-linear-to-r ${item.color} p-6 rounded-2xl text-white shadow-xl`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm opacity-90">{item.title}</p>
                    <h2 className="text-3xl font-bold mt-1">{item.value}</h2>
                  </div>
                  <item.icon className="text-4xl opacity-80" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-10"
          >
            <h2 className="text-xl font-semibold mb-4">🧾 RECENT ORDERS</h2>

            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="py-3">ORDER ID</th>
                  <th>ITEM</th>
                  <th>STATUS</th>
                  <th>PRICE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-b last:border-none hover:bg-gray-50">
                    <td className="py-3 font-medium">{order.id}</td>
                    <td>{order.item}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === "Completed"
                            ? "bg-green-300 text-green-600"
                            : "bg-yellow-300 text-yellow-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="font-semibold">{order.price}</td>
                    <td className="flex gap-2 py-3">
                      <button
                        onClick={() => handleEdit(order.id)}
                        className="px-3 py-1 text-xs font-semibold rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="px-3 py-1 text-xs font-semibold rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Popular Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-4">🔥 POPULAR ITEMS</h2>

            <div className="flex gap-4 flex-wrap">
              {["Shami Kabab Burger", "Chocolate Rasmalai", "Pizza-Max", "Spicy Red Sauce Pasta"].map((item, index) => (
                <span
                  key={index}
                  className="px-5 py-2 bg-orange-100 text-orange-600 rounded-full font-semibold hover:bg-orange-200 transition cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
