/* eslint-disable no-unused-vars */

import Sidebar from "./sidebar";
 
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { db } from "../firebase/config";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [rating,setRating ] = useState();


  useEffect(() => {
    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
      const data = snapshot.docs.map((d) => ({
        docId: d.id,
        ...d.data(),
      }));
      setMenuItems(data);
    });
    return () => unsub();
  }, []);


  const handleDelete = async (docId) => {
    try {
      await deleteDoc(doc(db, "products", docId));
      toast.success("Item deleted");
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  
  const handleAdd = () => {
    setEditId(null);
    setTitle("");
    setImage("");
    setPrice();
    setRating();
    setShowModal(true);
  };

  
  const handleEdit = (item) => {
    setEditId(item.docId);
    setTitle(item.title || item.name);
    setImage(item.image);
    setPrice(item.price);
    setRating(item.rating)
    setShowModal(true);
  };

  
  const handleSave = async () => {
    if (!title || !image || !price || !rating) {
      toast.error("All fields required");
      return;
    }

    try {
      if (editId) {
        await updateDoc(doc(db, "products", editId), {
          title,
          name: title,
          image,
           price:price,
          rating:rating
          
        });
        toast.success("Item updated");
      } else {
        await addDoc(collection(db, "products"), {
          title,
          name: title,
          image,
          price:price,
          rating:rating,
          description: "New item added",
        });
        toast.success("Item added");
      }
      setShowModal(false);
    } catch (err) {
      toast.error("Action failed");
    }
  };

//   return (


// <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
//   <Sidebar />
//   <div className="flex-1 flex flex-col">
//     <main className="flex-1 overflow-auto p-6 text-gray-900 dark:text-gray-100">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">MENU ITEMS</h1>
//         <button
//           onClick={handleAdd}
//           className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//         >
//           ADD NEW ITEM
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
//         {menuItems.map((item, index) => (
//           <motion.div
//             key={item.docId}   // ✅ FIX
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.05 }}
//             className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition"
//           >
            
//             <img
//               src={item.image}
//               alt={item.name || item.title}
//               className="w-full h-36 object-cover"
//             />

            
//             <div className="p-4 flex flex-col items-center">
//               <h3 className="text-lg font-semibold mb-2 text-center">
//                 {item.name || item.title}
//               </h3>

//               <div className="flex gap-2 w-full justify-center">
//                 <button
//                   onClick={() => handleEdit(item)}   // ✅ FIX
//                   className="flex-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
//                 >
//                   EDIT
//                 </button>
//                 <button
//                   onClick={() => handleDelete(item.docId)} // ✅ FIX
//                   className="flex-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
//                 >
//                   DELETE
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </main>
//   </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
//           <div className="bg-white p-5 rounded-lg w-80 space-y-3">
//             <h2 className="text-lg font-bold">
//               {editId ? "Edit Item" : "Add Item"}
//             </h2>

//             <input
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Title"
//               className="border p-2 w-full rounded"
//             />

//             <input
//               value={image}
//               onChange={(e) => setImage(e.target.value)}
//               placeholder="Image URL"
//               className="border p-2 w-full rounded"
//             />
//              <input
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               placeholder="Set Price"
//               className="border p-2 w-full rounded"
//             />
//             <input
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//               placeholder="Set Rating"
//               className="border p-2 w-full rounded"
//             />

//             <div className="flex gap-2">
//               <button
//                 onClick={handleSave}
//                 className="flex-1 bg-green-600 text-white py-2 rounded cursor-pointer"
//               >
//                 SAVE
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="flex-1 bg-gray-400 text-white py-2 rounded cursor-pointer"
//               >
//                 CANCEL
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
 return (
  <div className="flex h-screen bg-linear-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
    <Sidebar />

    <div className="flex-1 flex flex-col">
      <main className="flex-1 overflow-auto p-6">

        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-wide text-gray-800 dark:text-white">
            🍽️ MENU ITEMS
          </h1>

          <button
            onClick={handleAdd}
            className="px-6 py-2 rounded-xl text-white font-semibold
            bg-linear-to-r rom-green-500 to-emerald-600
            hover:scale-105 hover:shadow-xl transition-all"
          >
            + ADD ITEM
          </button>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.docId}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl
              rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700
              hover:-translate-y-2 hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />

                {/* Rating Badge */}
                <span className="absolute top-3 right-3 px-3 py-1 text-sm
                  bg-yellow-400 text-black font-bold rounded-full shadow">
                  ⭐ {item.rating}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                  {item.title || item.name}
                </h3>

                <p className="mb-3">
                  <span className="px-4 py-1 text-sm font-semibold rounded-full
                    bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    ₹ {item.price}
                  </span>
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 py-2 text-sm font-semibold rounded-lg text-white
                    bg-linear-to-r from-blue-500 to-indigo-600
                    hover:scale-105 transition-all"
                  >
                    EDIT
                  </button>

                  <button
                    onClick={() => handleDelete(item.docId)}
                    className="flex-1 py-2 text-sm font-semibold rounded-lg text-white
                    bg-linear-to-r from-red-500 to-rose-600
                    hover:scale-105 transition-all"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>

    {/* Modal */}
    {showModal && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm
        flex items-center justify-center z-50">
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white dark:bg-gray-900 rounded-2xl w-96 p-6
          shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            {editId ? "✏️ Edit Item" : "➕ Add Item"}
          </h2>

          <div className="space-y-3">
            {["Title", "Image URL", "Price", "Rating"].map((label, i) => (
              <input
                key={i}
                placeholder={label}
                value={[title, image, price, rating][i]}
                onChange={(e) => {
                  if (i === 0) setTitle(e.target.value);
                  if (i === 1) setImage(e.target.value);
                  if (i === 2) setPrice(e.target.value);
                  if (i === 3) setRating(e.target.value);
                }}
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800
                border border-gray-300 dark:border-gray-700
                focus:ring-2 focus:ring-blue-500 outline-none"
              />
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSave}
              className="flex-1 py-2 rounded-lg text-white font-semibold
              bg-linear-to-r from-green-500 to-emerald-600
              hover:scale-105 transition-all"
            >
              SAVE
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="flex-1 py-2 rounded-lg text-white font-semibold
              bg-gray-500 hover:bg-gray-600 transition-all"
            >
              CANCEL
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </div>
);
}