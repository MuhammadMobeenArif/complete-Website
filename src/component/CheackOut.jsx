import { useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "../contextcart/context";

export default function Checkout() {
  const { cartItems, totalCartPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    toast.success("Order placed successfully!");

    clearCart(); // ⚠️ you forgot to call this function earlier

    setFormData({
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="pt-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">YOUR CART IS EMPTY</h2>
        <p>PLEASE ADD SOME PRODUCTS BEFORE CHEACKOUT.</p>
      </div>
    );
  }
return (
  <div className="pt-28 max-w-7xl mx-auto px-4">

    {/* Page Title */}
    <h2 className="text-4xl font-extrabold text-center mb-12
      bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600">
      🧾 CHECKOUT
    </h2>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Order Summary */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Order Summary
        </h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id + (item.CardGifts || "")}
              className="bg-white/80 backdrop-blur-xl rounded-2xl
              shadow-lg border border-gray-200
              hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover rounded-t-2xl"
              />

              <div className="p-4 text-center">
                <h4 className="font-semibold text-lg">{item.title}</h4>

                <p className="text-sm text-gray-500">
                  🎁 Gift: {item.CardGifts || "None"}
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  Qty: {item.quantity}
                </p>

                <span className="inline-block mt-3 px-4 py-1
                  bg-blue-100 text-blue-700 font-bold rounded-full">
                  ${item.price * item.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center
          text-xl font-extrabold border-t pt-6">
          <span>Total</span>
          <span className="text-green-600">${totalCartPrice}</span>
        </div>
      </div>

      {/* Shipping Form */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Shipping Details
        </h3>

        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl
          shadow-xl border border-gray-200 space-y-4"
        >
          {[
            { name: "name", placeholder: "Full Name", type: "text" },
            { name: "email", placeholder: "Email Address", type: "email" },
            { name: "address", placeholder: "Address", type: "text" },
            { name: "city", placeholder: "City", type: "text" },
            { name: "postalCode", placeholder: "Postal Code", type: "text" },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300
              focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          ))}

          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-xl font-semibold text-white
            bg-linear-to-r from-blue-600 to-purple-600
            hover:scale-105 hover:shadow-xl transition-all"
          >
            PLACE ORDER
          </button>
        </form>
      </div>
    </div>
  </div>
);

}
