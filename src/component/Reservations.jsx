import Navbar from "./Navbar";
import Sidebar from "./sidebar";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialReservations = [
  { id: 1, customer: "Ali Khan", date: "2025-12-03", time: "7:00 PM", people: 4, status: "Confirmed" },
  { id: 2, customer: "Sara Ali", date: "2025-12-03", time: "8:00 PM", people: 2, status: "Pending" },
  { id: 3, customer: "Ahmed Raza", date: "2025-12-04", time: "6:30 PM", people: 3, status: "Cancelled" },
  { id: 4, customer: "Zara Khan", date: "2025-12-04", time: "7:30 PM", people: 5, status: "Confirmed" },
];

export default function Reservations() {
  const [reservations, setReservations] = useState(initialReservations);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this reservation?")) {
      setReservations(reservations.filter(res => res.id !== id));
      toast.success("Reservation deleted!");
    }
  };

  const handleEditStatus = (id) => {
    const newStatus = prompt("Enter new status (Pending, Confirmed, Cancelled):");
    if (!newStatus) {
      toast.error("Status cannot be empty!");
      return;
    }
    setReservations(reservations.map(res => res.id === id ? { ...res, status: newStatus } : res));
    toast.success("Reservation status updated!");
  };

  const handleAdd = () => {
    const customer = prompt("Enter customer name:");
    const date = prompt("Enter reservation date (YYYY-MM-DD):");
    const time = prompt("Enter reservation time (e.g., 7:00 PM):");
    const people = parseInt(prompt("Number of people:"), 10);
    const status = prompt("Enter status (Pending, Confirmed, Cancelled):");

    if (!customer || !date || !time || !people || !status) {
      toast.error("All fields are required!");
      return;
    }

    if (isNaN(people) || people <= 0) {
      toast.error("People must be a positive number!");
      return;
    }

    setReservations([...reservations, { id: Date.now(), customer, date, time, people, status }]);
    toast.success("Reservation added successfully!");
  };
return (
  <div className="flex h-screen bg-linear-to-br from-gray-100 via-gray-200 to-gray-100
    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
    
    <Sidebar />

    <div className="flex-1 flex flex-col">
      <Navbar />

      <main className="flex-1 overflow-auto p-6">

        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-wide
            bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-green-500">
            🪑 RESERVATIONS
          </h1>

          <button
            onClick={handleAdd}
            className="px-6 py-2 rounded-xl font-semibold text-white
            bg-linear-to-r from-green-500 to-emerald-600
            hover:scale-105 hover:shadow-xl transition-all"
          >
            + ADD RESERVATION
          </button>
        </div>

        {/* Table Wrapper */}
        <div className="overflow-x-auto rounded-2xl shadow-xl
          bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl
          border border-gray-200 dark:border-gray-700">

          <table className="min-w-full">
            <thead className="bg-linear-to-r from-blue-600 to-purple-600 text-white">
              <tr>
                <th className="py-4 px-6 text-left">ID</th>
                <th className="py-4 px-6 text-left">Customer</th>
                <th className="py-4 px-6 text-left">Date</th>
                <th className="py-4 px-6 text-left">Time</th>
                <th className="py-4 px-6 text-left">People</th>
                <th className="py-4 px-6 text-left">Status</th>
                <th className="py-4 px-6 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {reservations.map((res, index) => (
                <motion.tr
                  key={res.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-200 dark:border-gray-700
                  hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="py-4 px-6 font-semibold">{res.id}</td>
                  <td className="py-4 px-6 font-medium">{res.customer}</td>
                  <td className="py-4 px-6">{res.date}</td>
                  <td className="py-4 px-6">{res.time}</td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold
                      bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-100">
                      {res.people}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-6">
                    <span
                      className={`px-4 py-1 text-sm font-bold rounded-full shadow
                        ${
                          res.status === "Confirmed"
                            ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
                            : res.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100"
                            : "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"
                        }`}
                    >
                      {res.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-6 flex justify-center gap-3">
                    <button
                      onClick={() => handleEditStatus(res.id)}
                      className="px-4 py-1.5 rounded-lg text-sm font-semibold text-white
                      bg-linear-to-r from-blue-500 to-indigo-600
                      hover:scale-105 transition-all"
                    >
                      EDIT
                    </button>

                    <button
                      onClick={() => handleDelete(res.id)}
                      className="px-4 py-1.5 rounded-lg text-sm font-semibold text-white
                      bg-linear-to-r from-red-500 to-rose-600
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
