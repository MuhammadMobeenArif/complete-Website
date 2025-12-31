import { FaBell, FaUserCircle } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-lg bg-linear-to-r from-white to-gray-100 dark:from-gray-500 dark:to-gray-500 transition-colors duration-300">
      
      {/* Greeting / Title */}
      <h1 className="text-gray- 900 dark:text-white font-extrabold text-lg md:text-xl lg:text-2xl bg-linear-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
        WELCOME, MUHAMMAD MOBEEN ARIF
      </h1>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <Link to="/setting">
          <motion.div
            whileHover={{ scale: 1.3, rotate: 10 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <FaBell className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl" />
          </motion.div>
        </Link>

        {/* Profile */}
        <Link to="/profile">
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <FaUserCircle className="text-gray-600 dark:text-gray-300 text-2xl md:text-3xl" />
          </motion.div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
