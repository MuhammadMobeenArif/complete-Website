import { useState } from "react";
import Sidebar from "./sidebar";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const FollowerCard = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 flex justify-center items-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden relative transition-all duration-300 hover:scale-106"
          >
            {/* Cover Image */}
            <div className="h-24 bg-linear-to-r from-green-500 to-blue-600"></div>

            {/* Profile Image */}
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1730822765/SMIT/Students/4220143353857.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto absolute -top-1 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg transition-all duration-300"
            />

            {/* Card Body */}
            <div className="p-6 mt-16 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                MUHAMMAD MOBEEN ARIF
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Frontend Developer</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">mobeenarif13@gmail.com</p>

              {/* Follow Button */}
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`mt-4 px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg ${
                  isFollowing ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>

              {/* Stats */}
              <div className="flex justify-around mt-6 text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
                <div>
                  <strong className="text-lg text-gray-900 dark:text-white">10.2M</strong>
                  <p className="text-gray-600 dark:text-gray-300">Followers</p>
                </div>
                <div>
                  <strong className="text-lg text-gray-900 dark:text-white">9000k</strong>
                  <p className="text-gray-600 dark:text-gray-300">Following</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FollowerCard;
