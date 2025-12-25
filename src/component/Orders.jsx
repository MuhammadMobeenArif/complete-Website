import Navbar from "./Navbar";
import Sidebar from "./sidebar";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';

const initialOrders = [
  { id: 1, customer: "Ali Khan", item: "Pizza", qty: 2, status: "Pending" },
  { id: 2, customer: "Sara Ali", item: "Burger", qty: 1, status: "Completed" },
  { id: 3, customer: "Ahmed Raza", item: "Pasta", qty: 3, status: "Preparing" },
  { id: 4, customer: "Zara Khan", item: "Salad", qty: 1, status: "Cancelled" },
];

export default function Orders() {
  const [orders, setOrders] = useState(initialOrders);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this order?")) {
      setOrders(orders.filter(order => order.id !== id));
      toast.success("Order deleted!");
    }
  };

  const handleEditStatus = (id) => {
    const newStatus = prompt("Enter new status (Pending, Preparing, Completed, Cancelled):");
    if (newStatus) {
      setOrders(
        orders.map(order => order.id === id ? { ...order, status: newStatus } : order)
      );
      toast.success("Order status updated!");
    }
  };

  const handleAddOrder = () => {
    const customer = prompt("Enter customer name:");
    const item = prompt("Enter item name:");
    const qty = parseInt(prompt("Enter quantity:"), 10);
    const status = prompt("Enter status (Pending, Preparing, Completed, Cancelled):");

    if (!customer || !item || !qty || !status) {
      toast.error("All fields are required!");
      return;
    }

    if (isNaN(qty) || qty <= 0) {
      toast.error("Quantity must be a positive number!");
      return;
    }

    setOrders([...orders, { id: Date.now(), customer, item, qty, status }]);
    toast.success("Order added successfully!");
  };

return (
  <div className="flex h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
    <Sidebar />

    <div className="flex-1 flex flex-col">
      <Navbar />

      <main className="flex-1 overflow-auto p-6">

        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-wide text-gray-800 dark:text-white">
            📦 ORDERS
          </h1>

          <button
            onClick={handleAddOrder}
            className="px-6 py-2 rounded-xl font-semibold text-white
            bg-gradient-to-r from-green-500 to-emerald-600
            hover:scale-105 hover:shadow-xl transition-all"
          >
            + ADD ORDER
          </button>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto rounded-2xl shadow-xl
          bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl
          border border-gray-200 dark:border-gray-700">

          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <tr>
                <th className="py-4 px-6 text-left">ID</th>
                <th className="py-4 px-6 text-left">Customer</th>
                <th className="py-4 px-6 text-left">Item</th>
                <th className="py-4 px-6 text-left">Qty</th>
                <th className="py-4 px-6 text-left">Status</th>
                <th className="py-4 px-6 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-200 dark:border-gray-700
                  hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="py-4 px-6 font-semibold">{order.id}</td>
                  <td className="py-4 px-6 font-medium">{order.customer}</td>
                  <td className="py-4 px-6">{order.item}</td>
                  <td className="py-4 px-6">{order.qty}</td>

                  {/* Status */}
                  <td className="py-4 px-6">
                    <span
                      className={`px-4 py-1 text-sm font-bold rounded-full shadow-sm
                        ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
                            : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100"
                            : order.status === "Preparing"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100"
                            : "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"
                        }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-6 flex justify-center gap-3">
                    <button
                      onClick={() => handleEditStatus(order.id)}
                      className="px-4 py-1.5 rounded-lg text-sm font-semibold text-white
                      bg-gradient-to-r from-blue-500 to-indigo-600
                      hover:scale-105 transition-all"
                    >
                      EDIT
                    </button>

                    <button
                      onClick={() => handleDelete(order.id)}
                      className="px-4 py-1.5 rounded-lg text-sm font-semibold text-white
                      bg-gradient-to-r from-red-500 to-rose-600
                      hover:scale-105 transition-all"
                    >
                      DELETE
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
);


}
