// export default function ProfileTab({ data, setData, editing }) {
//   return (
//     <div className="space-y-4">
//       <label className="block">
//         <span className="font-semibold">NAME</span>
//         <input
//           type="text"
//           disabled={!editing}
//           value={data.name}
//           onChange={(e) => setData({ ...data, name: e.target.value })}
//           className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//         />
//       </label>

//       <label className="block">
//         <span className="font-semibold">Email</span>
//         <input
//           type="email"
//           disabled={!editing}
//           value={data.email}
//           onChange={(e) => setData({ ...data, email: e.target.value })}
//           className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//         />
//       </label>

//       <label className="block">
//         <span className="font-semibold">Password</span>
//         <input
//           type="password"
//           disabled={!editing}
//           value={data.password}
//           onChange={(e) => setData({ ...data, password: e.target.value })}
//           className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//         />
//       </label>
//     </div>
//   );
// }
export default function ProfileTab({ data, setData, editing }) {
  return (
    <div className="space-y-6 max-w-lg">
      
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          disabled={!editing}
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className={`w-full rounded-lg border px-4 py-2 text-sm transition
            ${editing 
              ? "border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              : "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"}
            text-gray-900 dark:text-gray-100`}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          disabled={!editing}
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className={`w-full rounded-lg border px-4 py-2 text-sm transition
            ${editing 
              ? "border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              : "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"}
            text-gray-900 dark:text-gray-100`}
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Password
        </label>
        <input
          type="password"
          disabled={!editing}
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className={`w-full rounded-lg border px-4 py-2 text-sm transition
            ${editing 
              ? "border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              : "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"}
            text-gray-900 dark:text-gray-100`}
        />
      </div>

    </div>
  );
}

